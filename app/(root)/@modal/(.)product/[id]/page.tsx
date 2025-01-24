import { prisma } from '@/prisma/prisma-client';
import { ChooseProductModal } from '@/shared/components/shared';
import { notFound } from 'next/navigation';

export const dynamicParams = true;
interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductModalPage({ params }: PageProps) {
  const { id } = await params;
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

  return <ChooseProductModal product={product} />;
}
