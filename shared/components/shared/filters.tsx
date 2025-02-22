'use client';

import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Title } from './title';
import { RangeSlider } from '.';
import { Input } from '../ui';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilters, useIngredient, useQueryFilters } from '@/shared/hooks';

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
      <Title text="Filterung" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <CheckboxFiltersGroup
          title="Teigart"
          className="mb-3"
          limit={6}
          items={[
            { text: 'Dünn', value: '1' },
            { text: 'Traditionell', value: '2' },
          ]}
          loading={loading}
          onCklickCheckbox={filters.setPizzaTypes}
          selected={filters.pizzaTypes}
          name="pizzaTypes"
        />

        <CheckboxFiltersGroup
          title="Größen"
          className="mb-3"
          limit={6}
          items={[
            { text: '20 cm', value: '20' },
            { text: '30 cm', value: '30' },
            { text: '40 cm', value: '40' },
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
            max={100}
            value={String(filters.prices.priceFrom || 0)}
            onChange={(e) => filters.updatePrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="100"
            min={0}
            max={100}
            value={String(filters.prices.priceTo || 0)}
            onChange={(e) => filters.updatePrice('priceTo', Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={100}
          step={2}
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 100]}
          onValueChange={([priceFrom, priceTo]) => filters.setPrices({ priceFrom, priceTo })}
        />
      </div>

      <CheckboxFiltersGroup
        title="Zutaten"
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
