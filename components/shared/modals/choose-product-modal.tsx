import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import React from 'react';
import { Title } from '../title';
import { Product } from '@prisma/client';

interface Props {
  className?: string;
  product: Product;
}

const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
  console.log('hello modal', product);
  return (
    <Dialog open={Boolean(product)}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className
        )}>
        {product.name}
      </DialogContent>
    </Dialog>
  );
};

export { ChooseProductModal };
