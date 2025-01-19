import { cn } from '@/shared/lib/utils';
import React from 'react';
import { PizzaImage } from './pizza-image';
import { GroupVariants, Title } from '.';
import { Button } from '../ui';
import { PizzaSizes, pizzaSizes, pizzaTypes, PizzaTypes } from '@/shared/constans/pizza';

interface Props {
  imageUrl: string;
  name: string;
  className?: string;
  ingredients: any[];
  items?: any[];
  onClickAdd?: VoidFunction;
  size?: 20 | 30 | 40;
}

const ChoosePizzaForm: React.FC<Props> = ({
  className,
  imageUrl,
  name,
  ingredients,
  itemsm,
  onClickAdd,
}) => {
  const [size, setSize] = React.useState<PizzaSizes>(20);
  const [type, setType] = React.useState<PizzaTypes>(1);

  const textDetails =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, accusantium.';
  const totalPrice = 100;

  return (
    <div className={cn('flex flex-1', className)}>
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#fbfafa] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
        <GroupVariants
          items={pizzaSizes}
          value={String(size)}
          onClick={(value) => setSize(Number(value) as PizzaSizes)}
          className="mt-5"
        />
        <GroupVariants
          items={pizzaTypes}
          value={String(type)}
          onClick={(value) => setType(Number(value) as PizzaTypes)}
          className="mt-5"
        />
        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину {totalPrice} $
        </Button>
      </div>
    </div>
  );
};

export { ChoosePizzaForm };
