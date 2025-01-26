'use client';

import { cn } from '@/shared/lib/utils';
import React from 'react';
import { WhiteBlock } from '../white-block';
import { FormInput, FormTextarea } from '../form';

interface Props {
  className?: string;
}

const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  return (
    <WhiteBlock title="3. Адресс доставки" className={cn('', className)}>
      <div className="flex flex-col gap-5">
        <FormInput name="address" className="text-base" placeholder="Ваш адрес" type="address" />

        <FormTextarea
          rows={20}
          className="text-base"
          placeholder="Комментарий к заказу"
          name={'comment'}
        />
      </div>
    </WhiteBlock>
  );
};

export { CheckoutAddressForm };
