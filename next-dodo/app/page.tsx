import { Container, Filters, ProductsGroupList, Title, TopBar } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className=" mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* <ProductCard
                imageUrl={
                  'https://media.dodostatic.com/image/r:292x292/11ef0286069492ba911c4d3b3376436c.avif'
                }
                id={0}
                name={'Чисбургер Пицца'}
                price={5.5}
              /> */}
              <ProductsGroupList
                title={'Пиццы'}
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ef0286069492ba911c4d3b3376436c.avif',
                    price: 5.5,
                    items: [{ price: 5.5 }],
                  },
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ef0286069492ba911c4d3b3376436c.avif',
                    price: 5.5,
                    items: [{ price: 5.5 }],
                  },
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ef0286069492ba911c4d3b3376436c.avif',
                    price: 5.5,
                    items: [{ price: 5.5 }],
                  },
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ef0286069492ba911c4d3b3376436c.avif',
                    price: 5.5,
                    items: [{ price: 5.5 }],
                  },
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ef0286069492ba911c4d3b3376436c.avif',
                    price: 5.5,
                    items: [{ price: 5.5 }],
                  },
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ef0286069492ba911c4d3b3376436c.avif',
                    price: 5.5,
                    items: [{ price: 5.5 }],
                  },
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ef0286069492ba911c4d3b3376436c.avif',
                    price: 5.5,
                    items: [{ price: 5.5 }],
                  },
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ef0286069492ba911c4d3b3376436c.avif',
                    price: 5.5,
                    items: [{ price: 5.5 }],
                  },
                  {
                    id: 1,
                    name: 'Чизбургер пицца',
                    imageUrl:
                      'https://media.dodostatic.com/image/r:292x292/11ef0286069492ba911c4d3b3376436c.avif',
                    price: 5.5,
                    items: [{ price: 5.5 }],
                  },
                ]}
                categoryId={0}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
