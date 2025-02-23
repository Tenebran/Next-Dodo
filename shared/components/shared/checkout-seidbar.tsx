import React from 'react';
import { CheckoutItemDetails, WhiteBlock } from '.';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import { Button, Skeleton } from '../ui';

interface Props {
  totalAmount: number;
  loading?: boolean;
}

const VAT = 15;
const DELIVERY_PRICE = 5;

const CheckoutSeidbar: React.FC<Props> = ({ totalAmount, loading }) => {
  const vatPrice = (totalAmount * VAT) / 100;
  const totalPrice = !totalAmount ? undefined : totalAmount + vatPrice + DELIVERY_PRICE;

  return (
    <WhiteBlock className="p-6 sticky top-4">
      <div className="flex flex-col gap-1">
        <span className="text-xl">Insgesamt:</span>
        {loading ? (
          <Skeleton className=" h-11 w-48" />
        ) : (
          <span className="text-[34px] h-11 font-extrabold">{totalPrice?.toFixed(2) ?? 0} €</span>
        )}
      </div>
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Package size={18} className="mr-2 text-gray-300" />
            Warenkorbpreis
          </div>
        }
        value={
          loading ? <Skeleton className=" h-6 w-16 rounded-[6px]" /> : `${totalAmount.toFixed(2)} €`
        }
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Percent size={18} className="mr-2 text-gray-300" />
            Steuern
          </div>
        }
        value={
          loading ? <Skeleton className=" h-6 w-16 rounded-[6px]" /> : `${vatPrice.toFixed(2)} €`
        }
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Truck size={18} className="mr-2 text-gray-300" />
            Lieferung
          </div>
        }
        value={loading ? <Skeleton className=" h-6 w-16 rounded-[6px]" /> : `${DELIVERY_PRICE} €`}
      />

      <Button
        loading={loading}
        type="submit"
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold">
        Zur Kasse gehen
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  );
};

export { CheckoutSeidbar };
