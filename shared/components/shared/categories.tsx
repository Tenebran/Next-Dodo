'use client';

import { cn } from '@/shared/lib/utils';
import { useCategoryStore } from '@/shared/store/category';
import { Category } from '@prisma/client';
import React from 'react';

interface Props {
  items: Category[];
  clasName: string;
}

export const Categories: React.FC<Props> = ({ clasName, items }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', clasName)}>
      {items.map(({ name, id }) => {
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
