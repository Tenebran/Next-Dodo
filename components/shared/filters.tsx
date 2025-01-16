'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { Title } from './title';
import { RangeSlider } from '.';
import { Input } from '../ui';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilters, useIngredient, useQueryFilters } from '@/hooks';

interface Props {
  className?: string;
}

const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredient();
  const filters = useFilters();

  useQueryFilters(filters);

  const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

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
          onCklickCheckbox={filters.setPizzaTypes}
          selected={filters.pizzaTypes}
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
          onCklickCheckbox={filters.setSizes}
          selected={filters.sizes}
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
            value={String(filters.prices.priceFrom)}
            onChange={(e) => filters.updatePrice('priceFrom', e.target.valueAsNumber || 0)}
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            value={String(filters.prices.priceTo)}
            onChange={(e) => filters.updatePrice('priceTo', e.target.valueAsNumber || 0)}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
          onValueChange={([priceFrom, priceTo]) => filters.setPrices({ priceFrom, priceTo })}
        />
      </div>

      <CheckboxFiltersGroup
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        defaultItem={items.slice(0, 6)}
        items={items}
        loading={loading}
        onCklickCheckbox={filters.setIngredients}
        selected={filters.selectedIngredients}
        name="ingredients"
      />
    </div>
  );
};

export { Filters };
