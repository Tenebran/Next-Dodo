'use server';

import { prisma } from '@/prisma/prisma-client';
import { TCheckoutFormValues } from '@/shared/constans/checkout-form-schema';
import { OrderStatus } from '@prisma/client';

export async function createOrder(data: TCheckoutFormValues) {
  const token = '123';

  await prisma.order.create({
    data: {
      token,
      fullName: data.firstName + ' ' + data.lastName,
      totalAmount: 1500,
      status: OrderStatus.PENDING,
      items: [],
      email: data.email,
      phone: data.phone,
      address: data.address,
      comment: data.comment,
    },
  });

  return 'https://nextjs.org/';
}
