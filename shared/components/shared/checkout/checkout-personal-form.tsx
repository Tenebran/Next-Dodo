import { cn } from '@/shared/lib/utils';
import React from 'react';
import { WhiteBlock } from '..';
import { FormInput } from '../form';

interface Props {
  className?: string;
}

const CheckoutPersonalForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock className={cn('', className)} title="2. Персональные данные">
      <div className="grid grid-cols-2 gap-5">
        <FormInput name="firstName" className="text-base" placeholder="Имя" />
        <FormInput name="lastName" className="text-base" placeholder="Фамилия" />
        <FormInput name="email" className="text-base" placeholder="E-Mail" type="email" />
        <FormInput name="phone" className="text-base" placeholder="Телефон" type="tel" />
      </div>
    </WhiteBlock>
  );
};

export { CheckoutPersonalForm };
