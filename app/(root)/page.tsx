import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
  Stories,
} from '@/shared/components/shared';
import { findPizzas } from '@/shared/lib';
import { GetSearchParams } from '@/shared/lib/find-pizza';
import { Suspense } from 'react';

export default async function Home({ searchParams }: { searchParams: Promise<GetSearchParams> }) {
  // await prisma.$executeRawUnsafe('DISCARD PLANS');

  const resolveParams = await searchParams;
  const categories = await findPizzas(resolveParams);
  const filteredCategories = categories.filter((category) => category.products.length);

  return (
    <>
      <Container className=" mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar items={filteredCategories} />
      <Stories />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Suspense>
              <Filters />
            </Suspense>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {filteredCategories.map((category) => (
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
