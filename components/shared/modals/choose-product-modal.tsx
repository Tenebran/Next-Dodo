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
  return <></>;
};

export { ChooseProductModal };
