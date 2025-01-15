'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Title } from './title';
import { FilterCheckbox, RangeSlider } from '.';
import { Input } from '../ui';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, selectedIds, onAddId } = useFilterIngredients();
  const [prices, setPrice] = React.useState<PriceProps>({
    priceFrom: 0,
    priceTo: 1000,
  });

  const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));
  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    });
  };

  return (
    <div className={cn('', className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" name="recipes" />
        <FilterCheckbox text="Новинки" value="2" name="recipes" />
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
        selectedIds={selectedIds}
        name="ingredients"
      />
    </div>
  );
};

export { Filters };
