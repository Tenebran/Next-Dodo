import { useSearchParams } from 'next/navigation';
import { useSet } from 'react-use';
import React from 'react';

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

export interface QueryFilters extends PriceProps {
  pizzaTypes: string;
  sizes: string;
  ingredients: string;
}

export interface Filters {
  sizes: Set<string>;
  pizzaTypes: Set<string>;
  selectedIngredients: Set<string>;
  prices: PriceProps;
}

interface ReturnProps extends Filters {
  setPrices: (value: PriceProps) => void;
  setPizzaTypes: (value: string) => void;
  setSizes: (value: string) => void;
  updatePrice: (name: keyof PriceProps, value: number) => void;
  setIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<string>(searchParams.get('ingredients')?.split(',') || [])
  );

  const [sizes, { toggle: toogleSizes }] = useSet(
    new Set<string>(new Set<string>(searchParams.get('sizes')?.split(',') || []))
  );

  const [pizzaTypes, { toggle: tooglePizzaTypes }] = useSet(
    new Set<string>(searchParams.get('pizzaTypes')?.split(',') || [])
  );

  const [prices, setPrices] = React.useState<PriceProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices({
      ...prices,
      [name]: value,
    });
  };

  return {
    sizes,
    pizzaTypes,
    selectedIngredients,
    prices,
    setPrices,
    updatePrice,
    setPizzaTypes: React.useCallback(tooglePizzaTypes, []),
    setIngredients: React.useCallback(toggleIngredients, []),
    setSizes: React.useCallback(toogleSizes, []),
  };
};
