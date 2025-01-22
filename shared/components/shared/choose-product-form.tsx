import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Title } from '.';
import { Button } from '../ui';

interface Props {
  imageUrl: string;
  name: string;
  className?: string;
  price: number;
  onSabmit?: VoidFunction;
}

const ChooseProductForm: React.FC<Props> = ({ className, imageUrl, name, onSabmit, price }) => {
  return (
    <div className={cn('flex flex-1', className)}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <img
          src={imageUrl}
          alt={name}
          className="relative left-2 top-2 transition-all z-10 duration-300 w-[400px] h-[400px]"
        />
      </div>

      <div className="w-[490px] bg-[#fbfafa] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <Button onClick={onSabmit} className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину {price} $
        </Button>
      </div>
    </div>
  );
};

export { ChooseProductForm };
