'use client';

import { CheckoutSeidbar, Container, Title } from '@/shared/components/shared';
import { useCart } from '@/shared/hooks/use-cart';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckoutAddressForm,
  CheckoutCart,
  CheckoutPersonalForm,
} from '@/shared/components/shared/checkout';

export default function CheckoutPage() {
  const { items, totalAmount, onCklickCountButton, removeCartItem } = useCart();

  const checkoutSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phone: z.string(),
    adress: z.string(),
    comment: z.string(),
  });

  const form = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      adress: '',
      comment: '',
    },
  });
  return (
    <Container className="mt-10">
      <Title text="Оформление Заказа" className="font-extrabold mb-8 text-[36px]" />
      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <CheckoutCart
            items={items}
            onCklickCountButton={onCklickCountButton}
            removeCartItem={removeCartItem}
          />
          <CheckoutPersonalForm />
          <CheckoutAddressForm />
        </div>
        <div className="w-[450px]">
          <CheckoutSeidbar totalAmount={totalAmount} />
        </div>
      </div>
    </Container>
  );
}
