import { cn } from '@/shared/lib/utils';
import React from 'react';
import { WhiteBlock } from '..';
import { FormInput } from '../form';
import { Input } from '../../ui';

interface Props {
  className?: string;
}

const CheckoutPersonalForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock className={cn('', className)} title="2. Персональные данные">
      <div className="grid grid-cols-2 gap-5">
        <Input name="firstName" className="text-base" placeholder="Имя" />
        <Input name="lastName" className="text-base" placeholder="Фамилия" />
        <Input name="email" className="text-base" placeholder="E-Mail" type="email" />
        <FormInput name="phone" className="text-base" placeholder="Телефон" type="tel" />
      </div>
    </WhiteBlock>
  );
};

export { CheckoutPersonalForm };
