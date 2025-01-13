'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use';
import { Title } from './title';
import { ProductCard } from './product-card';
import { useCategoryStore } from '@/store/category';

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  listClassName?: string;
  className?: string;
}

const ProductsGroupList: React.FC<Props> = ({
  className,
  title,
  items,
  listClassName,
  categoryId,
}) => {
  const itersectionRef = useRef<HTMLDivElement | null>(null);
  const serActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersection = useIntersection(itersectionRef as React.RefObject<HTMLDivElement>, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log('HELLO', categoryId);
      serActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, serActiveCategoryId]);

  return (
    <div className={cn('', className)} id={title} ref={itersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};

export { ProductsGroupList };
