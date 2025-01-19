import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Product } from '@prisma/client';
import { PizzaImage } from './pizza-image';
import { GroupVariants, Title } from '.';
import { Button } from '../ui';

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
  const textDetails =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, accusantium.';
  const totalPrice = 100;

  return (
    <div className={cn('flex flex-1', className)}>
      <PizzaImage imageUrl={imageUrl} size={30} />

      <div className="w-[490px] bg-[#fbfafa] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400">{textDetails}</p>
        <GroupVariants
          selectedValue="2"
          items={[
            { name: 'Маленькая', value: '1' },
            { name: 'Средняя ', value: '2' },
            { name: 'Большая', value: '3' },
          ]}
        />
        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину {totalPrice} $
        </Button>
      </div>
    </div>
  );
};

export { ChoosePizzaForm };
