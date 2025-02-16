'use server';

import { prisma } from '@/prisma/prisma-client';
import { PayOrderTamplate } from '@/shared/components/shared';
import { TCheckoutFormValues } from '@/shared/constants/checkout-form-schema';
import { createPayment, sendEmail } from '@/shared/lib';
import { getUserSession } from '@/shared/lib/get-user-session';
import { OrderStatus, Prisma } from '@prisma/client';
import { hashSync } from 'bcrypt';
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

export async function updateUserInfo(body: Prisma.UserUpdateInput) {
  try {
    const currentUser = await getUserSession();
    if (!currentUser) {
      throw new Error('User not found');
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: Number(currentUser.id),
      },
    });

    await prisma.user.update({
      where: {
        id: Number(currentUser.id),
      },
      data: {
        fullName: body.fullName,
        password: body.password ? hashSync(body.password as string, 10) : findUser?.password,
        email: body.email,
      },
    });
  } catch (err) {
    console.log('Error [UPDATE_USER_INFO]', err);
    throw err;
  }
}

export async function registerUser(body: Prisma.UserCreateInput) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (user) {
      if (!user.verified) {
        throw new Error('Почта не подтверждена');
      }
      throw new Error('Пользователь уже существует');
    }

    const createdUser = await prisma.user.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        password: hashSync(body.password, 10),
      },
    });

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    await prisma.verificationCode.create({
      data: { code, userId: createdUser.id },
    });
  } catch (err) {
    console.log('Error [REGISTER_USER]', err);
    throw err;
  }
}
