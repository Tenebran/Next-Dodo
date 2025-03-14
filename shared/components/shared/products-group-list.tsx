'use client';

import { cn } from '@/shared/lib/utils';
import React from 'react';
import { useIntersection } from 'react-use';
import { Title } from './title';
import { ProductCard } from './product-card';
import { useCategoryStore } from '@/shared/store/category';
import { ProductWithRelations } from '@/@types/prisma';

interface Props {
  title: string;
  items: ProductWithRelations[];
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
  const itersectionRef = React.useRef<HTMLDivElement | null>(null);
  const serActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersection = useIntersection(itersectionRef as React.RefObject<HTMLDivElement>, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
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
            description={product.description}
            imageUrl={product.imageUrl}
            price={Number(product.items[0].price)}
            ingredients={product.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export { ProductsGroupList };
