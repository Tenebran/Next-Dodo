'use client';

import { ProductWithRelations } from '@/@types/prisma';
import { cn } from '@/shared/lib/utils';
import { useCartStore } from '@/shared/store';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { ChoosePizzaForm } from './choose-pizza-form';
import { ChooseProductForm } from './choose-product-form';

interface Props {
  className?: string;
  product: ProductWithRelations;
}

const ProductForm: React.FC<Props> = ({ className, product }) => {
  const router = useRouter();
  const addCartItem = useCartStore((state) => state.addCartItem);
  const loading = useCartStore((state) => state.loading);
  const isPizzaForm = !!product.items[0].pizzaType;
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

  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        name={product.name}
        imageUrl={product.imageUrl}
        ingredients={product.ingredients}
        items={product.items}
        onSubmit={onSubmit}
        loading={loading}
      />
    );
  }

  return (
    <ChooseProductForm
      name={product.name}
      imageUrl={product.imageUrl}
      onSabmit={() => onSubmit()}
      price={Number(firstItem.price)}
      loading={loading}
    />
  );
};

export { ProductForm };
