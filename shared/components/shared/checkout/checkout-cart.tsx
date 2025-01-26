import { cn } from '@/shared/lib/utils';
import React from 'react';
import { WhiteBlock } from '../white-block';
import { CheckoutItem } from '../checkout-item';
import { getCartItemsDetails } from '@/shared/lib';
import { PizzaSizes, PizzaTypes } from '@/shared/constans/pizza';
import { CartStateItem } from '@/shared/store';

interface Props {
  className?: string;
  items: CartStateItem[];
  onCklickCountButton: (id: number, quantity: number, type: 'plus' | 'minus') => void;
  removeCartItem: (id: number) => void;
}

const CheckoutCart: React.FC<Props> = ({
  className,
  items,
  onCklickCountButton,
  removeCartItem,
}) => {
  return (
    <WhiteBlock title="1. Корзина" className={cn('mb-10', className)}>
      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <CheckoutItem
            key={item.id}
            disabled={item.disabled}
            imageUrl={item.imageUrl}
            name={item.name}
            price={item.price}
            details={getCartItemsDetails(
              item.pizzaType as PizzaTypes,
              item.pizzaSize as PizzaSizes,
              item.ingredients
            )}
            quantity={item.quantity}
            id={item.id}
            onClickCountButton={(type) => onCklickCountButton(item.id, item.quantity, type)}
            onClickRemove={() => removeCartItem(item.id)}
          />
        ))}
      </div>
    </WhiteBlock>
  );
};

export { CheckoutCart };
