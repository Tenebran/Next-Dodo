import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Container } from './container';
import { Categories } from './categories';
import { SortPopup } from './sortPopup';
import { Category } from '@prisma/client';

interface Props {
  items: Category[];
  className?: string;
}

const TopBar: React.FC<Props> = ({ className, items }) => {
  return (
    <div
      className={cn(
        'sticky top-0 bg-white/80 py-5 shadow-lg shadow-black/5 z-10 backdrop-blur-lg',
        className
      )}>
      <Container className="flex justify-between">
        <Categories clasName="" items={items} />
        <SortPopup className="" />
      </Container>
    </div>
  );
};

export { TopBar };
