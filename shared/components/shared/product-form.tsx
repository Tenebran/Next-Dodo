'use client';

import { ProductWithRelations } from '@/@types/prisma';
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

const ProductForm: React.FC<Props> = ({ product }) => {
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
      toast.success(`${product.name} wurde zum Warenkorb hinzugefügt`);
    } catch (e) {
      toast.error(`Fehler: ${product.name} konnte nicht zum Warenkorb hinzugefügt werden`);
      console.error(e);
    }
  };

  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        name={product.name}
        description={product.description}
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
