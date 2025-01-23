import { prisma } from '@/prisma/prisma-client';
import { updateCartTotalAmount } from '@/shared/lib/update-cart-total-amount';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const id = await (await params).id;
    const numericId = Number(id);

    const data = (await req.json()) as {
      quantity: number;
    };
    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Cart token not found' }, { status: 404 });
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: numericId,
      },
    });

    if (!cartItem) {
      return NextResponse.json({ error: 'Cart item not found' }, { status: 404 });
    }
    await prisma.cartItem.update({
      where: {
        id: numericId,
      },
      data: {
        quantity: data.quantity,
      },
    });

    const updatedUserCart = await updateCartTotalAmount(token);

    return NextResponse.json(updatedUserCart);
  } catch (e) {
    return NextResponse.json({ error: 'Something went wrong ', e });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }>  }) {
  try {
    const id = await (await params).id;
    const numericId = Number(id);
    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Cart token not found' }, { status: 404 });
    }

    const cartItem = await prisma.cartItem.findFirst({ where: { id: numericId } });

    if (!cartItem) {
      return NextResponse.json({ error: 'Cart item not found' }, { status: 404 });
    }
    await prisma.cartItem.delete({ where: { id: numericId } });
    const updatedUserCart = await updateCartTotalAmount(token);

    return NextResponse.json(updatedUserCart);
  } catch (e) {
    console.error(e);
  }
}
