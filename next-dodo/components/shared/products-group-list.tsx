import { cn } from '@/lib/utils';
import React from 'react';
import { Title } from './title';
import { ProductCard } from './product-card';

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
  return (
    <div className={cn('', className)}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product, i) => (
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
