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
    <WhiteBlock title="3. Lieferadresse" className={cn('', className)}>
      <div className="flex flex-col gap-5">
        <FormInput name="address" className="text-base" placeholder="Ihre Adresse" type="address" />

        <FormTextarea
          rows={20}
          className="text-base"
          placeholder="Kommentar zur Bestellung"
          name={'comment'}
        />
      </div>
    </WhiteBlock>
  );
};

export { CheckoutAddressForm };
