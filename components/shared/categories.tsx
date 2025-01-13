'use client';

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import React from 'react';

interface Props {
  clasName: string;
}

const cats = [
  { id: 1, name: 'Пиццы' },
  { id: 2, name: 'Комбо' },
  { id: 3, name: 'Закуски' },
  { id: 4, name: 'Коктейли' },
  { id: 5, name: 'Кофе' },
  { id: 6, name: 'Напитки' },
  { id: 7, name: 'Десерты' },
];

export const Categories: React.FC<Props> = ({ clasName }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  console.log('categoryActiveId', categoryActiveId);

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', clasName)}>
      {cats.map(({ name, id }) => {
        return (
          <a
            className={cn(
              'flex items-center, font-bold, h-11 rounded-2xl px-5',
              categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary'
            )}
            key={id}
            href={`/#${name}`}>
            <button>{name}</button>
          </a>
        );
      })}
    </div>
  );
};
