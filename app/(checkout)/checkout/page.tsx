'use client';

import { CheckoutSeidbar, Container, Title } from '@/shared/components/shared';
import { useCart } from '@/shared/hooks/use-cart';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckoutAddressForm,
  CheckoutCart,
  checkoutFormSchema,
  CheckoutPersonalForm,
  TCheckoutFormValues,
} from '@/shared/components/shared/checkout';

export default function CheckoutPage() {
  const { items, totalAmount, onCklickCountButton, removeCartItem, loading } = useCart();

  const form = useForm<TCheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      comment: '',
    },
  });

  const onSumbit: SubmitHandler<TCheckoutFormValues> = (data) => {
    console.log(data);
  };

  return (
    <Container className="mt-10">
      <Title text="Оформление Заказа" className="font-extrabold mb-8 text-[36px]" />
      <FormProvider {...form}>
        <div className="flex gap-10">
          <div className="flex flex-col gap-10 flex-1 mb-20">
            <CheckoutCart
              items={items}
              onCklickCountButton={onCklickCountButton}
              removeCartItem={removeCartItem}
            />
            <CheckoutPersonalForm className={loading ? 'opacity-40 pointer-events-none' : ''} />
            <CheckoutAddressForm className={loading ? 'opacity-40 pointer-events-none' : ''} />
          </div>
          <form onSubmit={form.handleSubmit(onSumbit)}>
            <div className="w-[450px]">
              <CheckoutSeidbar totalAmount={totalAmount} loading={loading} />
            </div>
          </form>
        </div>
      </FormProvider>
    </Container>
  );
}
