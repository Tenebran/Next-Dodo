'use client';

import { CheckoutSeidbar, Container, Title, WhiteBlock } from '@/shared/components/shared';
import { FormInput } from '@/shared/components/shared/form';
import { Input, Textarea } from '@/shared/components/ui';
import { useCart } from '@/shared/hooks/use-cart';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckoutCart } from '@/shared/components/shared/checkout';

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
          <WhiteBlock title="2. Персональные данные">
            <div className="grid grid-cols-2 gap-5">
              <Input name="firstName" className="text-base" placeholder="Имя" />
              <Input name="lastName" className="text-base" placeholder="Фамилия" />
              <Input name="email" className="text-base" placeholder="E-Mail" type="email" />
              <FormInput name="phone" className="text-base" placeholder="Телефон" type="tel" />
            </div>
          </WhiteBlock>
          <WhiteBlock title="3. Адресс доставки">
            <div className="flex flex-col gap-5">
              <Input name="firstName" className="text-base" placeholder="Адресс" />
              <Textarea rows={5} className="text-base" placeholder="Комментарий к заказу" />
            </div>
          </WhiteBlock>
        </div>
        <div className="w-[450px]">
          <CheckoutSeidbar totalAmount={totalAmount} />
        </div>
      </div>
    </Container>
  );
}
