'use client';

import { cn } from '@/shared/lib/utils';
import React from 'react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { useRouter } from 'next/navigation';
import { ProductForm } from '..';
import { ProductWithRelations } from '@/@types/prisma';
import { Dialog, DialogContent } from '../../ui';
import { DialogDescription, DialogTitle } from '../../ui/dialog';
import { useCartStore } from '@/shared/store';
import toast from 'react-hot-toast';

interface Props {
  className?: string;
  product: ProductWithRelations;
}

const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[610px] bg-white overflow-hidden',
          className
        )}>
        <VisuallyHidden>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </VisuallyHidden>
        <ProductForm product={product} />
      </DialogContent>
    </Dialog>
  );
};

export { ChooseProductModal };
