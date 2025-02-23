import { PaymentCallbackData } from '@/@types/yookassa';
import { prisma } from '@/prisma/prisma-client';
import { OrderSuccessTamplate } from '@/shared/components/shared/email-templates/order-success';
import { sendEmail } from '@/shared/lib';
import { CartItemDTO } from '@/shared/services/dto/cart.dto';
import { OrderStatus } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  console.log('Callback request received', req);
  try {
    const body = (await req.json()) as PaymentCallbackData;
    const order = await prisma.order.findUnique({
      where: { id: Number(body.object.metadata.order_id) },
    });

    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    const isSucceeded = body.object.status === 'succeeded';

    await prisma.order.update({
      where: { id: order.id },
      data: {
        status: isSucceeded ? OrderStatus.SUCCEEDED : OrderStatus.CANCELLED,
      },
    });
    const items = JSON.parse(order?.items as string) as CartItemDTO[];

    if (isSucceeded) {
      await sendEmail(
        order.email,
        `Next Dodo / Ihre Bestellung Nr.${order.id} wurde erfolgreich bezahlt!`,
        OrderSuccessTamplate({
          orderId: order.id,
          items: items,
        })
      );
    } else {
      await sendEmail(
        order.email,
        `Next Dodo / Ihre Bestellung Nr.${order.id} wurde storniert!`,
        OrderSuccessTamplate({
          orderId: order.id,
          items: items,
        })
      );
    }

    return NextResponse.json(body);
  } catch (e) {
    console.log('Callback request error', e);
    return NextResponse.json({ error: 'Callback request error' }, { status: 500 });
  }
}
