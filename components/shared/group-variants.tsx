'use client';

import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};

interface Props {
  items: readonly Variant[];
  defaultValue?: string;
  onClick?: (value: Variant['value']) => void;
  className?: string;
  selectedValue?: Variant['value'];
}

const GroupVariants: React.FC<Props> = ({
  className,
  items,
  defaultValue,
  onClick,
  selectedValue,
}) => {
  return (
    <div className={cn('flex justify-between bg-[#f3f3f7] rounded-3xl P-1 select-none', className)}>
      {items.map((item) => (
        <button
          key={item.name}
          onClick={() => onClick?.(item.value)}
          className={cn(
            'flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm',
            {
              'bg-white shadow': item.value === selectedValue,
              'text-gray-500 opacity-50 pointer-events-none': item.disabled,
            }
          )}>
          {item.name}
        </button>
      ))}
    </div>
  );
};

export { GroupVariants };
