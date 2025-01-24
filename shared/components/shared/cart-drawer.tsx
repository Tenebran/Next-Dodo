'use client';

import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui/sheet';
import Link from 'next/link';
import { Button } from '../ui';
import { ArrowRight } from 'lucide-react';
import { CartDriverItem } from './cart-driver-item';
import { getCartItemsDetails } from '@/shared/lib';
import { useCartStore } from '@/shared/store';
import { PizzaSizes, PizzaTypes } from '@/shared/constans/pizza';

interface Props {
  className?: string;
}

const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
  const totalAmount = useCartStore((state) => state.totalAmount);
  const fetchCartItems = useCartStore((state) => state.fetchCartItems);
  const items = useCartStore((state) => state.items);
  const updateItemQuantity = useCartStore((state) => state.updateItemQuantity);
  const removeCartItem = useCartStore((state) => state.removeCartItem);

  console.log('items', items);

  React.useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  const onCklickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;

    updateItemQuantity(id, newQuantity);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <SheetHeader>
          <SheetTitle>
            В Корзине <span className="font-bold">{items.length} товара</span>
          </SheetTitle>
        </SheetHeader>

        <div className="-mx-6 mt-5 overflow-auto flex-1 scrollbar">
          {items.map((item) => (
            <div className="mb-2 " key={item.id}>
              <CartDriverItem
                imageUrl={item.imageUrl}
                name={item.name}
                price={item.price}
                details={
                  item.pizzaSize && item.pizzaType
                    ? getCartItemsDetails(
                        item.pizzaType as PizzaTypes,
                        item.pizzaSize as PizzaSizes,
                        item.ingredients
                      )
                    : ''
                }
                quantity={item.quantity}
                id={item.id}
                onClickCountButton={(type) => onCklickCountButton(item.id, item.quantity, type)}
                onClickRemove={() => removeCartItem(item.id)}
              />
            </div>
          ))}
        </div>

        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итого
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>
              <span className="font-bold text-lg">{totalAmount} $</span>
            </div>
            <Link href="/cart">
              <Button type="submit" className="w-full h-12 text-base">
                Оформить заказ
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export { CartDrawer };
