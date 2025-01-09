import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  clasName: string;
}

const cats = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты'];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ clasName }) => {
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', clasName)}>
      {cats.map((cat, index) => {
        return (
          <a
            className={cn(
              'flex items-center, font-bold, h-11 rounded-2xl px-5',
              activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary'
            )}
            key={index}>
            <button>{cat}</button>
          </a>
        );
      })}
    </div>
  );
};
