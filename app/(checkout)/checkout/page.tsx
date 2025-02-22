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
import { useSession } from 'next-auth/react';
import { Api } from '@/shared/services/api.client';

export default function CheckoutPage() {
  const [submitting, setSubmitting] = React.useState(false);
  const { items, totalAmount, onCklickCountButton, removeCartItem, loading } = useCart();
  const { data: session } = useSession();

  React.useEffect(() => {
    async function fetchUserInfo() {
      const data = await Api.auth.getMe();
      const [firstName, lastName] = data.fullName.split(' ');

      form.setValue('firstName', firstName);
      form.setValue('lastName', lastName);
      form.setValue('email', data.email);
    }

    if (session) {
      fetchUserInfo();
    }
  }, [session]);

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
      toast.success('Bestellung erfolgreich aufgegeben! Weiterleitung zur Zahlung...', {
        icon: '🎉',
      });

      if (url !== undefined) {
        location.href = url;
      }
    } catch {
      toast.error('Bestellung konnte nicht erstellt werden', {
        icon: '🚫',
      });
      setSubmitting(false);
    }
  };

  return (
    <Container className="mt-10">
      <Title text="Bestellung aufgeben" className="font-extrabold mb-8 text-[36px]" />
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
