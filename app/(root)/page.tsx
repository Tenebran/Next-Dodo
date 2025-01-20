import { prisma } from '@/prisma/prisma-client';
import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/shared/components/shared';

export default async function Home() {
  // await prisma.$executeRawUnsafe('DISCARD PLANS');

  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          items: true,
          ingredients: true,
        },
      },
    },
  });

  return (
    <>
      <Container className=" mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>

      <TopBar items={categories.filter((category) => category.products.length)} />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map((category) => (
                <ProductsGroupList
                  key={category.id}
                  title={category.name}
                  items={category.products}
                  categoryId={category.id}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
