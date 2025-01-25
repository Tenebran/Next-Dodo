import { cn } from '@/shared/lib/utils';
import React from 'react';
import { WhiteBlock } from '../white-block';
import { Input, Textarea } from '../../ui';

interface Props {
  className?: string;
}

const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="3. Адресс доставки" className={cn('', className)}>
      <div className="flex flex-col gap-5">
        <Input name="firstName" className="text-base" placeholder="Адресс" />
        <Textarea rows={5} className="text-base" placeholder="Комментарий к заказу" />
      </div>
    </WhiteBlock>
  );
};

export { CheckoutAddressForm };
