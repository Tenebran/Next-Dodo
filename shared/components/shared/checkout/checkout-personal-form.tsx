import { cn } from '@/shared/lib/utils';
import React from 'react';
import { WhiteBlock } from '..';
import { FormInput } from '../form';

interface Props {
  className?: string;
}

const CheckoutPersonalForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock className={cn('', className)} title="2. Persönliche Daten">
      <div className="grid grid-cols-2 gap-5">
        <FormInput name="firstName" className="text-base" placeholder="Vorname" />
        <FormInput name="lastName" className="text-base" placeholder="Nachname" />
        <FormInput name="email" className="text-base" placeholder="E-Mail" type="email" />
        <FormInput name="phone" className="text-base" placeholder="Telefon" type="tel" />
      </div>
    </WhiteBlock>
  );
};

export { CheckoutPersonalForm };
