import axios from 'axios';

export async function createPayment(details: any) {
  const { data } = await axios.post('https://api.yookassa.ru/v3/payments', {
    amount: {
      value: '1.00',
      currency: 'EUR',
    },
    capture: true,
    description: details.description,
    metadata: {
      order_id: details.orderId,
    },
    confirmation: {
      type: 'redirect',
      return_url: 'http://localhost:3000/?paid',
    },
  });
}
