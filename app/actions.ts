'use server';

import { prisma } from '@/prisma/prisma-client';
import { PayOrderTamplate } from '@/shared/components/shared';
import { TCheckoutFormValues } from '@/shared/constants/checkout-form-schema';
import { createPayment, sendEmail } from '@/shared/lib';
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

    const paymentData = await createPayment({
      orderId: order.id,
      amount: order.totalAmount,
      description: `Next Dodo / Оплата заказа #${order.id}`,
    });

    if (!paymentData) throw new Error('Payment data not found');

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        paymentId: paymentData.id,
      },
    });

    const paymentUrl = paymentData.confirmation.confirmation_url;

    await sendEmail(
      'sergejgarkusha94@gmail.com',
      `Next Dodo / Оплатите заказ #${order.id}`,
      PayOrderTamplate({
        orderId: order.id,
        totalAmount: order.totalAmount,
        paymentUrl: paymentUrl,
      })
    );
    return paymentUrl;
  } catch (error) {
    console.error('createOrder server error', error);
  }
}
