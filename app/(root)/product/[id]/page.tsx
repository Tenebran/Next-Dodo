import { prisma } from '@/prisma/prisma-client';
import { notFound, useRouter } from 'next/navigation';
import {
  ChoosePizzaForm,
  ChooseProductForm,
  Container,
  PizzaImage,
} from '@/shared/components/shared';
import { useCartStore } from '@/shared/store';
import toast from 'react-hot-toast';

export const dynamicParams = true;

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <PizzaImage imageUrl={product.imageUrl} size={30} />

        <div className="w-[490px] bg-[#fbfafa] p-7"></div>
      </div>
    </Container>
  );
}
