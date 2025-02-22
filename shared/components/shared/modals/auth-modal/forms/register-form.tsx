'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { TFormRegister, formRegisterSchema } from './schemas';
import { FormInput } from '../../../form';
import { Button } from '@/shared/components/ui';
import { registerUser } from '@/app/actions';

interface Props {
  onClose?: VoidFunction;
  onClickLogin?: VoidFunction;
}

export const RegisterForm: React.FC<Props> = ({ onClose }) => {
  const form = useForm<TFormRegister>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: TFormRegister) => {
    try {
      await registerUser({
        email: data.email,
        password: data.password,
        fullName: data.fullName,
      });

      toast.error('Registrierung erfolgreich 📝. Bitte bestätigen Sie Ihre E-Mail', {
        icon: '✅',
      });

      onClose?.();
    } catch {
      return toast.error('Ungültige E-Mail oder Passwort', {
        icon: '❌',
      });
    }
  };

  return (
    <FormProvider {...form}>
      <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
        <FormInput name="email" label="E-Mail" required />
        <FormInput name="fullName" label="Vollständiger Name" required />
        <FormInput name="password" label="Passwort" type="password" required />
        <FormInput name="confirmPassword" label="Passwort bestätigen" type="password" required />

        <Button loading={form.formState.isSubmitting} className="h-12 text-base" type="submit">
          Registrieren
        </Button>
      </form>
    </FormProvider>
  );
};
