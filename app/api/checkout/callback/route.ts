import { PaymentCallbackData } from '@/@types/yookassa';
import { prisma } from '@/prisma/prisma-client';
import { OrderSuccessTamplate } from '@/shared/components/shared/email-templates/order-success';
import { sendEmail } from '@/shared/lib';
import { CartItemDTO } from '@/shared/services/dto/cart.dto';
import { CartStateItem } from '@/shared/store';
import { OrderStatus } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  console.log('Callback request received', req);
  try {
    const data = await req.json();
    const body = (await req.json()) as PaymentCallbackData;
    console.log('Callback request data', data);
    const order = await prisma.order.findUnique({
      where: { id: Number(body.object.metadata.order_id) },
    });

    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    await prisma.order.update({
      where: { id: order.id },
      data: {
        status: OrderStatus.SUCCEEDED,
      },
    });
    const items = order?.items as unknown as CartItemDTO[];

    await sendEmail(
      'sergejgarkusha94@gmail.com',
      `Next Dodo / Ваш заказ No${order.id} успешно оплачен!`,
      OrderSuccessTamplate({
        orderId: order.id,
        items: items,
      })
    );

    return NextResponse.json(body);
  } catch (e) {
    console.log('Callback request error', e);
    return NextResponse.json({ error: 'Callback request error' }, { status: 500 });
  }
}
