import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { formLoginSchema, TFormLogin } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Title } from '../../..';
import { FormInput } from '../../../form/form-input';
import { Button } from '../../../../ui';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';

interface Props {
  onClose?: () => void;
}

const LoginForm: React.FC<Props> = ({ onClose }) => {
  const form = useForm<TFormLogin>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data: TFormLogin) => {
    try {
      const resp = await signIn('credentials', {
        ...data,
        redirect: false,
      });
      if (!resp?.ok) {
        throw Error();
      }

      toast.success('Sie haben sich erfolgreich in Ihr Konto eingeloggt', { icon: '🎉' });
      onClose?.();
    } catch (error) {
      console.error(error);
      toast.error('Fehler beim Einloggen in das Konto', { icon: '🚨' });
    }
  };

  return (
    <FormProvider {...form}>
      <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center">
          <div className="mr-2">
            <Title text="Anmeldung" size="md" className="font-bold" />
            <p className="text-gray-400">Geben Sie Ihre E-Mail-Adresse ein, um sich anzumelden</p>
          </div>
          <img src="/assets/images/phone-icon.png" alt="phone-icon" width={60} height={60} />
        </div>
        <FormInput name="email" className="text-base" type="email" label="E-Mail" />
        <FormInput name="password" className="text-base" type="password" label="Passwort" />

        <Button loading={form.formState.isSubmitting} className="h-12 text-base" type="submit">
          Anmelden
        </Button>
      </form>
    </FormProvider>
  );
};

export { LoginForm };
