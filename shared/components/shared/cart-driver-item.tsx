import { cn } from '@/shared/lib/utils';
import React from 'react';
import { CartItemProps } from './cart-item-details/cart-item-details.types';
import * as CartItem from './cart-item-details';
import { CountButton } from './count-button';
import { Trash2Icon } from 'lucide-react';

interface Props extends CartItemProps {
  onClickCountButton?: (type: 'plus' | 'minus') => void;
  className?: string;
  onClickRemove?: () => void;
}

const CartDriverItem: React.FC<Props> = ({
  className,
  imageUrl,
  name,
  price,
  details,
  quantity,
  disabled,
  onClickCountButton,
  onClickRemove,
}) => {
  return (
    <div
      className={cn(
        'flex bg-white p-5 gap-6',
        { 'opacity-50 pointer-events-none': disabled },
        className
      )}>
      <CartItem.Image src={imageUrl} />

      <div className="flex-1">
        <CartItem.Info details={details} name={name} />
        <hr className="my-3" />
        <div className="flex items-center justify-between">
          <CountButton onClick={onClickCountButton} value={quantity} />
          <div className="flex items-center gap-3">
            <CartItem.Price value={price.toFixed(2)} />
            <Trash2Icon
              className="text-gray-400 cursor-pointer hover:text-gray-600"
              onClick={onClickRemove}
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartDriverItem };
