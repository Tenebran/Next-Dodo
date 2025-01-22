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

    if (!token) {
      token = crypto.randomUUID();
    }

    const userCart = await findOrCreateCart(token);

    const data = (await req.json()) as CreateCartItemValues;

    const findCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart?.id,
        productItemId: data.productItemId,
        ingredients: {
          every: {
            id: {
              in: data.ingredientsIds,
            },
          },
        },
      },
    });

    if (findCartItem) {
      await prisma.cartItem.update({
        where: {
          id: findCartItem.id,
        },
        data: {
          quantity: findCartItem.quantity + 1,
        },
      });
    }
    await prisma.cartItem.create({
      data: {
        cartId: userCart?.id,
        productItemId: data.productItemId,
        quantity: 1,
        ingredients: {
          connect: data.ingredientsIds?.map((id) => ({ id })),
        },
      },
    });
    const updatedUserCart = await updateCartTotalAmount(token);
    const res = NextResponse.json(updatedUserCart);
    res.cookies.set('cartToken', token);

    return res;
  } catch (e) {
    console.error('[CART_POST] Server error', e);
    return NextResponse.json({ message: '[CART_POST] Server error' }, { status: 500 });
  }
}
