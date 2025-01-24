'use client';

import { cn } from '@/shared/lib/utils';
import Link from 'next/link';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui';
import { Plus } from 'lucide-react';
import { Ingredient } from '@prisma/client';

interface Props {
  imageUrl: string;
  id: number;
  name: string;
  price: number;
  ingredients: Ingredient[];
  className?: string;
}

const ProductCard: React.FC<Props> = ({ className, imageUrl, id, name, price, ingredients }) => {
  return (
    <div className={cn('', className)}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[256px] h-[215px]" src={imageUrl} alt={name} />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 fonе-bold" />
        <p className="text-sm text-gray-400">
          {ingredients.map((ingredient) => ingredient.name).join(', ')}
        </p>
        <div className="flex justify-between items-center mt-4 bg-co">
          <span className="text-[20px]">
            от <b>{price} $</b>
          </span>
          <Button className="text-base font-bold" variant="secondary">
            <Plus size={20} className="mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};

export { ProductCard };
