import { ChooseProductModal } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import React from 'react';

export default async function ProductModalPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      ingredients: true,
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }
  console.log('hello', product);
  return <ChooseProductModal product={product} />;
}
