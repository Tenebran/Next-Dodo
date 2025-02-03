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
import { createOrder } from '@/app/actions';
import toast from 'react-hot-toast';
import React from 'react';

export default function CheckoutPage() {
  const [submitting, setSubmitting] = React.useState(false);
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

  const onSumbit: SubmitHandler<TCheckoutFormValues> = async (data) => {
    try {
      setSubmitting(true);
      const url = await createOrder(data);
      toast.success('Заказ успешно оформлен! Переход на оплату....', {
        icon: '🎉',
      });

      if (url !== undefined) {
        location.href = url;
      }
    } catch {
      toast.error('Не удалось создать заказ', {
        icon: '🚫',
      });
      setSubmitting(false);
    }
  };

  return (
    <Container className="mt-10">
      <Title text="Оформление Заказа" className="font-extrabold mb-8 text-[36px]" />
      <FormProvider {...form}>
        <div className="flex gap-10">
          <div className="flex flex-col gap-10 flex-1 mb-20">
            <CheckoutCart
              items={items}
              loading={loading}
              onCklickCountButton={onCklickCountButton}
              removeCartItem={removeCartItem}
            />
            <CheckoutPersonalForm className={loading ? 'opacity-40 pointer-events-none' : ''} />
            <CheckoutAddressForm className={loading ? 'opacity-40 pointer-events-none' : ''} />
          </div>
          <form onSubmit={form.handleSubmit(onSumbit)}>
            <div className="w-[450px]">
              <CheckoutSeidbar totalAmount={totalAmount} loading={loading || submitting} />
            </div>
          </form>
        </div>
      </FormProvider>
    </Container>
  );
}
