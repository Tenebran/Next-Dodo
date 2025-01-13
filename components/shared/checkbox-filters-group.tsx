'use client';

import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { FilterChecboxProps, FilterCheckbox } from './filterCheckbox';
import { Input } from '../ui';

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItem: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (value: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItem,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  onChange,
  className,
  defaultValue,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSeatchValue] = useState('');

  const onChangeSearchInput = (value: string) => {
    setSeatchValue(value);
  };

  const list = showAll
    ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLocaleLowerCase()))
    : defaultItem.slice(0, limit);

  return (
    <div className={cn('', className)}>
      <p className="font-bold mb-3">{title}</p>
      {showAll && (
        <div className="mb-5">
          <Input
            placeholder={searchInputPlaceholder}
            className=" bg-gray-50 border-none"
            onChange={(e) => onChangeSearchInput(e.target.value)}
            value={searchValue}
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(ids) => console.log(ids)}
          />
        ))}
        {items.length > limit && (
          <div className={showAll ? 'border-t-neutral-100 mt-4' : ''}>
            <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
              {showAll ? 'Скрыть' : '+ Показать все'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export { CheckboxFiltersGroup };
