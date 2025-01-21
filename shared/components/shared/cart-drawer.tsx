import { cn } from '@/shared/lib/utils';
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

interface Props {
  className?: string;
}

const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]" side="right">
        <SheetHeader>
          <SheetTitle>
            В Корзине <span className="font-bold">3 товара</span>
          </SheetTitle>

          <SheetFooter className="mx-6 bg-white p-8">
            <div className="w-full">
              <span className="flex flex-1 text-lg text-neutral-500">
                Итого
                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
              </span>
              <span className="font-bold text-lg">50 $</span>
            </div>

            <Link href="/cart">
              <Button type="submit" className="w-full h-12 text-base">
                Оформить заказ
                <ArrowRight className="w-5 ml-2" />
              </Button>
            </Link>
          </SheetFooter>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export { CartDrawer };
