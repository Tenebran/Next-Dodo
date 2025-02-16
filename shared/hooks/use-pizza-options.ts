import React from 'react';
import { Variant } from '../components/shared/group-variants';
import { PizzaSizes, PizzaTypes } from '../constants/pizza';
import { useSet } from 'react-use';
import { getAvailable } from '../lib';
import { ProductItem } from '@prisma/client';

interface ReturnProps {
  size: PizzaSizes;
  type: PizzaTypes;
  setSize: (size: PizzaSizes) => void;
  setType: (type: PizzaTypes) => void;
  addIngredient: (id: number) => void;
  selectedIngredients: Set<number>;
  availablePizzas: Variant[];
  currentItemId?: number;
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = React.useState<PizzaSizes>(20);
  const [type, setType] = React.useState<PizzaTypes>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(new Set<number>([]));
  const availablePizzas = getAvailable(items, type);
  const currentItemId = items.find((item) => item.pizzaType === type && item.size === size)?.id;

  React.useEffect(() => {
    const currentSize = availablePizzas.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const avaliblePizzaSize = availablePizzas.find((item) => !item.disabled);
    if (!currentSize && avaliblePizzaSize) {
      setSize(Number(avaliblePizzaSize.value) as PizzaSizes);
    }
  }, [type]);

  return {
    size,
    type,
    setSize,
    setType,
    selectedIngredients,
    addIngredient,
    availablePizzas,
    currentItemId,
  };
};
