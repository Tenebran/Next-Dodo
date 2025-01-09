import { cn } from '@/lib/utils';
import React from 'react';
import { Title } from './title';

interface Props {
  className?: string;
}

const Filter: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('', className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        {/* <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" /> */}
      </div>
    </div>
  );
};

export { Filter };
