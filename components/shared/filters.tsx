'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Title } from './title';
import { FilterCheckbox, RangeSlider } from '.';
import { Input } from '../ui';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { useSet } from 'react-use';

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, selectedIngredients, onAddId } = useFilterIngredients();
  const [sizes, { toggle: toogleSizes }] = useSet(new Set<string>([]));
  const [pizzaTypes, { toggle: tooglePizzaTypes }] = useSet(new Set<string>([]));
  const [prices, setPrice] = React.useState<PriceProps>({
    priceFrom: 0,
    priceTo: 1000,
  });
  const filters = {
    ...prices,
    ...pizzaTypes,
    ...sizes,
    ...ingredients,
  };

  const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));
  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    });
  };

  React.useEffect(() => {
    console.log(prices, pizzaTypes, sizes, ingredients, selectedIngredients);
  }, [prices, pizzaTypes, sizes, ingredients, selectedIngredients]);

  return (
    <div className={cn('', className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <CheckboxFiltersGroup
          title="Тип теста"
          className="mb-3"
          limit={6}
          items={[
            { text: 'Тонкое', value: '1' },
            { text: 'Традиционное', value: '2' },
          ]}
          loading={loading}
          onCklickCheckbox={tooglePizzaTypes}
          selected={pizzaTypes}
          name="pizzaTypes"
        />

        <CheckboxFiltersGroup
          title="Размеры"
          className="mb-3"
          limit={6}
          items={[
            { text: '20 см', value: '20' },
            { text: '30 см', value: '30' },
            { text: '40 см', value: '40' },
          ]}
          loading={loading}
          onCklickCheckbox={toogleSizes}
          selected={sizes}
          name="sizes"
        />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice('priceFrom', e.target.valueAsNumber || 0)}
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice('priceTo', e.target.valueAsNumber || 0)}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.priceFrom, prices.priceTo]}
          onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
        />
      </div>

      <CheckboxFiltersGroup
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        defaultItem={items.slice(0, 6)}
        items={items}
        loading={loading}
        onCklickCheckbox={onAddId}
        selected={selectedIngredients}
        name="ingredients"
      />
    </div>
  );
};

export { Filters };
