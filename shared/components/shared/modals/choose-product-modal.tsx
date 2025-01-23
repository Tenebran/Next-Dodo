'use client';

import { cn } from '@/shared/lib/utils';
import React from 'react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useRouter } from 'next/navigation';
import { ChoosePizzaForm, ChooseProductForm } from '..';
import { ProductWithRelations } from '@/@types/prisma';
import { Dialog, DialogContent } from '../../ui';
import { DialogDescription, DialogTitle } from '../../ui/dialog';
import { useCartStore } from '@/shared/store';
import toast from 'react-hot-toast';

interface Props {
  className?: string;
  product: ProductWithRelations;
}

const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
  const router = useRouter();
  const isPizzaForm = !!product.items[0].pizzaType;
  const addCartItem = useCartStore((state) => state.addCartItem);
  const loading = useCartStore((state) => state.loading);

  const firstItem = product.items[0];

  const onSubmit = async (productItemId?: number, ingredientsIds?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;
      await addCartItem({
        productItemId: itemId,
        ingredientsIds,
      });
      router.back();
      toast.success(`${product.name} добавлена в корзину`);
    } catch (e) {
      toast.error(`Не удалось добавить ${product.name} в корзину`);
      console.error(e);
    }
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[610px] bg-white overflow-hidden',
          className
        )}>
        <VisuallyHidden>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </VisuallyHidden>
        {isPizzaForm ? (
          <ChoosePizzaForm
            name={product.name}
            imageUrl={product.imageUrl}
            ingredients={product.ingredients}
            items={product.items}
            onSubmit={onSubmit}
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            name={product.name}
            imageUrl={product.imageUrl}
            onSabmit={() => onSubmit()}
            price={Number(firstItem.price)}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export { ChooseProductModal };
