import { cn } from '@/shared/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

const CartDriverItem: React.FC<Props> = ({ className }) => {
  return <div className={cn('', className)}></div>;
};

export { CartDriverItem };
