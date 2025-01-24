import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { findOrCreateCart, updateCartTotalAmount } from '@/shared/lib';
import { CreateCartItemValues } from '@/shared/services/dto/cart.dto';

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json({ items: [] });
    }
    const userCart = await prisma.cart.findFirst({
      where: {
        OR: [
          {
            token,
          },
        ],
      },
      include: {
        items: {
          orderBy: { createdAt: 'desc' },
          include: {
            productItem: {
              include: {
                product: true,
              },
            },
            ingredients: true,
          },
        },
      },
    });

    return NextResponse.json(userCart);
  } catch (e) {
    console.error('[CART_POST] Server error', e);

    return NextResponse.json({ message: '[CART_GET] Server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    let token = req.cookies.get('cartToken')?.value;
    if (!token) token = crypto.randomUUID();

    const userCart = await findOrCreateCart(token);
    if (!userCart) throw new Error('Cart not found');

    const data = (await req.json()) as CreateCartItemValues;
    const ingredientsIds = data.ingredientsIds?.sort() || [];

    // Ищем все возможные кандидаты
    const possibleItems = await prisma.cartItem.findMany({
      where: {
        cartId: userCart.id,
        productItemId: data.productItemId,
      },
      include: {
        ingredients: { select: { id: true } },
      },
    });

    // Функция сравнения массивов
    const arraysEqual = (a: number[], b: number[]) => {
      if (a.length !== b.length) return false;
      const sortedA = [...a].sort();
      const sortedB = [...b].sort();
      return sortedA.every((val, i) => val === sortedB[i]);
    };

    // Ищем точное совпадение ингредиентов
    const existingItem = possibleItems.find((item) => {
      const itemIngredients = item.ingredients.map((i) => i.id).sort();
      return arraysEqual(itemIngredients, ingredientsIds);
    });

    if (existingItem) {
      // Обновляем существующий элемент
      await prisma.cartItem.update({
        where: { id: existingItem.id },
        data: { quantity: { increment: 1 } },
      });
    } else {
      // Создаем новый элемент
      await prisma.cartItem.create({
        data: {
          cartId: userCart.id,
          productItemId: data.productItemId,
          quantity: 1,
          ingredients: {
            connect: ingredientsIds.map((id) => ({ id })),
          },
        },
      });
    }

    // Обновляем общую сумму
    const updatedCart = await updateCartTotalAmount(token);

    const response = NextResponse.json(updatedCart);
    response.cookies.set('cartToken', token);
    return response;
  } catch (e) {
    console.error('[CART_POST] Error:', e);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
