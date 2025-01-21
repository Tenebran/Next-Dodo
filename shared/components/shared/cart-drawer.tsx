'use client';

import React from 'react';
import {
  Sheet,
  SheetClose,
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

interface Props {
  className?: string;
}

const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <SheetHeader>
          <SheetTitle>
            В Корзине <span className="font-bold">3 товара</span>
          </SheetTitle>
        </SheetHeader>

        <div className="-mx-6 mt-5 overflow-auto flex-1 scrollbar">
          <div className="mb-2 ">
            <CartDriverItem
              imageUrl={
                'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp'
              }
              name={'Чоризо Фреш'}
              price={120}
              details={getCartItemsDetails(2, 30, [
                {
                  name: 'Сыр',
                  id: 0,
                  price: '',
                  imageUrl: '',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  cartItemId: null,
                },
                {
                  name: 'Моцарелла',
                  id: 0,
                  price: '',
                  imageUrl: '',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  cartItemId: null,
                },
                {
                  name: 'Помидоры',
                  id: 0,
                  price: '',
                  imageUrl: '',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  cartItemId: null,
                },
              ])}
              quantity={1}
              id={0}
            />
          </div>
          <div className="mb-2 ">
            <CartDriverItem
              imageUrl={
                'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp'
              }
              name={'Чоризо Фреш'}
              price={120}
              details={getCartItemsDetails(2, 30, [
                {
                  name: 'Сыр',
                  id: 0,
                  price: '',
                  imageUrl: '',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  cartItemId: null,
                },
                {
                  name: 'Моцарелла',
                  id: 0,
                  price: '',
                  imageUrl: '',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  cartItemId: null,
                },
                {
                  name: 'Помидоры',
                  id: 0,
                  price: '',
                  imageUrl: '',
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  cartItemId: null,
                },
              ])}
              quantity={1}
              id={0}
            />
          </div>
        </div>

        <SheetFooter className="-mx-6 bg-white p-8">
          <div className="w-full">
            <div className="flex mb-4">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итого
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>
              <span className="font-bold text-lg">500 ₽</span>
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
