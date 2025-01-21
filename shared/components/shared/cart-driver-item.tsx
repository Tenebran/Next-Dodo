import { cn } from '@/shared/lib/utils';
import React from 'react';
import { CartItemProps } from './cart-item-details/cart-item-details.types';
import * as CartItem from './cart-item-details';

interface Props extends CartItemProps {
  className?: string;
}

const CartDriverItem: React.FC<Props> = ({
  className,
  imageUrl,
  name,
  price,
  details,
  quantity,
  id,
}) => {
  return (
    <div className={cn('flex bg-white p-5 gap-6', className)}>
      <CartItem.Image src={imageUrl} />

      <div className="flex-1">
        <CartItem.Name text={name} />
        <CartItem.Price price={price} />
        <CartItem.Details details={details} />
        <CartItem.Quantity quantity={quantity} id={id} />
      </div>
    </div>
  );
};

export { CartDriverItem };
