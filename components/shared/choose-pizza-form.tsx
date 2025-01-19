import { cn } from '@/lib/utils';
import React from 'react';
import { Title } from './title';
import { Product } from '@prisma/client';

interface Props {
  imageUrl: string;
  name: string;
  className?: string;
  ingredients: any[];
  items?: any[];
  onClickAdd?: VoidFunction;
}

const ChoosePizzaForm: React.FC<Props> = ({
  className,
  imageUrl,
  name,
  ingredients,
  itemsm,
  onClickAdd,
}) => {
  return (
    <div className={cn('', className)}>
      <Title text={name} size="md" className="font-extrabold mb-1" />
    </div>
  );
};

export { ChoosePizzaForm };
