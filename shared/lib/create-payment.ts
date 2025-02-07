import { PaymentData } from '@/@types/yookassa';
import { v1 } from 'uuid';
import axios from 'axios';

export async function createPayment(details: any) {
  const { data } = await axios.post<PaymentData>(
    'https://api.yookassa.ru/v3/payments',
    {
      amount: {
        value: details.amount,
        currency: 'EUR',
      },
      capture: true,
      description: details.description,
      metadata: {
        order_id: details.orderId,
      },
      confirmation: {
        type: 'redirect',
        return_url: process.env.YOOKASSA_CALLBACK_URL,
      },
    },
    {
      auth: {
        username: process.env.YOOKASSA_API_KEY as string,
        password: '',
      },
      headers: {
        'Idempotency-Key': v1(),
      },
    }
  );

  return data;
}
