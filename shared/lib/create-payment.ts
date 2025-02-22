import { PaymentData } from '@/@types/yookassa';
import { v1 } from 'uuid';
import axios from 'axios';

interface CreatePaymentProps {
  orderId: number;
  amount: number;
  description: string;
}

export async function createPayment(details: CreatePaymentProps) {
  try {
    const { data } = await axios.post<PaymentData>(
      'https://api.yookassa.ru/v3/payments',
      {
        amount: {
          value: details.amount.toString(),
          currency: 'RUB',
        },
        capture: true,
        description: details.description,
        language: 'en',
        metadata: {
          order_id: details.orderId.toString(),
        },
        confirmation: {
          type: 'redirect',
          return_url: process.env.YOOKASSA_CALLBACK_URL,
        },
      },
      {
        auth: {
          username: process.env.YOOKASSA_STORE_ID as string,
          password: process.env.YOOKASSA_API_KEY as string,
        },
        headers: {
          'Content-Type': 'application/json',
          'Idempotence-Key': v1(),
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
}
