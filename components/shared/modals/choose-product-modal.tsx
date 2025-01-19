'use client';

import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import React from 'react';
import { Product } from '@prisma/client';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useRouter } from 'next/navigation';
import { ChooseProductForm } from '..';

interface Props {
  className?: string;
  product: Product;
}

const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
  const router = useRouter();

  // const isPizzaForm = product.return(
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className
        )}>
        <VisuallyHidden>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </VisuallyHidden>
        <ChooseProductForm
          name={product.name}
          imageUrl={product.imageUrl}
          ingredients={[]}
          items={[]}
          onClickAdd={() => {}}
        />
      </DialogContent>
    </Dialog>
  );
};

export { ChooseProductModal };
