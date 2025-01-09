import { Container } from '@/components/shared';
import { Categories } from '@/components/shared/categories';
import { Title } from '@/components/shared/title';

export default function Home() {
  return (
    <>
      <Container className=" mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
        <Categories clasName="" />
      </Container>
    </>
  );
}
