'use client';

import { cn } from '@/shared/lib/utils';
import React from 'react';
import { PizzaImage } from './pizza-image';
import { GroupVariants, IngredientItem, Title } from '.';
import { Button } from '../ui';
import { mapPizzaTypes, PizzaSizes, pizzaTypes, PizzaTypes } from '@/shared/constans/pizza';
import { Ingredient, ProductItem } from '@prisma/client';
import { usePizzaOptions } from '@/shared/hooks';
import { getPizzaDetails } from '@/shared/lib/get-pizza-details';

interface Props {
  imageUrl: string;
  name: string;
  className?: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  onClickAddCart?: VoidFunction;
  size?: 20 | 30 | 40;
}

const ChoosePizzaForm: React.FC<Props> = ({
  className,
  imageUrl,
  name,
  ingredients,
  items,
  onClickAddCart,
}) => {
  const { size, type, setSize, setType, selectedIngredients, addIngredient, availablePizzas } =
    usePizzaOptions(items);

  const { totalPrice, textDetails } = getPizzaDetails(
    items,
    ingredients,
    size,
    type,
    selectedIngredients,
    mapPizzaTypes
  );

  const handlerClickAddCart = () => {
    onClickAddCart?.();
  };

  return (
    <div className={cn('flex flex-1', className)}>
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#fbfafa] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
        <GroupVariants
          items={availablePizzas}
          value={String(size)}
          onClick={(value) => setSize(Number(value) as PizzaSizes)}
          className="mt-5"
        />
        <GroupVariants
          items={pizzaTypes}
          value={String(type)}
          onClick={(value) => setType(Number(value) as PizzaTypes)}
          className="mt-5"
        />

        <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientItem
                key={ingredient.id}
                name={ingredient.name}
                price={Number(ingredient.price)}
                imageUrl={ingredient.imageUrl}
                onClick={() => addIngredient(ingredient.id)}
                active={selectedIngredients.has(ingredient.id)}
              />
            ))}
          </div>
        </div>
        <Button
          onClick={handlerClickAddCart}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-5">
          Добавить в корзину {totalPrice.toFixed(2)} $
        </Button>
      </div>
    </div>
  );
};

export { ChoosePizzaForm };
