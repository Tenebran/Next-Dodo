'use server';

import { prisma } from '@/prisma/prisma-client';
import { PayOrderTamplate } from '@/shared/components/shared';
import { TCheckoutFormValues } from '@/shared/constans/checkout-form-schema';
import { sendEmail } from '@/shared/lib';
import { OrderStatus } from '@prisma/client';
import { cookies } from 'next/headers';

export async function createOrder(data: TCheckoutFormValues) {
  try {
    const cookiesStrore = cookies();
    const cartToken = (await cookiesStrore).get('cartToken')?.value;

    if (!cartToken) {
      throw new Error('Cart token not found');
    }

    const userCart = await prisma.cart.findFirst({
      include: {
        user: true,
        items: {
          include: {
            ingredients: true,
            productItem: {
              include: {
                product: true,
              },
            },
          },
        },
      },
      where: {
        token: cartToken,
      },
    });

    if (!userCart?.totalAmount) {
      throw new Error('Cart is empty');
    }

    if (!userCart) {
      throw new Error('Cart not found');
    }

    const order = await prisma.order.create({
      data: {
        token: cartToken,
        fullName: data.firstName + ' ' + data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        comment: data.comment,
        totalAmount: Number(userCart.totalAmount),
        status: OrderStatus.PENDING,
        items: JSON.stringify(userCart.items),
      },
    });

    await prisma.cart.update({
      where: {
        token: cartToken,
        id: userCart.id,
      },
      data: {
        totalAmount: '0',
      },
    });

    await prisma.cartItem.deleteMany({
      where: {
        cartId: userCart.id,
      },
    });

    await sendEmail(
      'sergejgarkusha94@gmail.com',
      `Next Dodo / Оплатите заказ #${order.id}`,
      PayOrderTamplate({
        orderId: order.id,
        totalAmount: order.totalAmount,
        paymentUrl: 'https://resend.com/docs/send-with-nextjs',
      })
    );
  } catch (error) {
    console.error('createOrder server error', error);
  }
}
