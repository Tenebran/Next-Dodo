import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './container';
import { Categories } from './categories';
import { SortPopup } from './sortPopup';

interface Props {
  className?: string;
}

const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
      <Container className="flex justify-between">
        <Categories clasName="" />
        <SortPopup className="" />
      </Container>
    </div>
  );
};

export { TopBar };
