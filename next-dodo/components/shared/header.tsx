import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './container';
import Image from 'next/image';

interface PropsType {
  className: string;
}

export const Header: React.FC<PropsType> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        <div>
          <Image alt="logo" width={35} height={35} src="/logo.png" />
          <div>
            <h1 className="text-2xl uppercase font-black">Next Dodo</h1>
            <p className="text-sm text-gray-400 leading-3">It couldn&apos;t be tastier</p>
          </div>
        </div>
      </Container>
    </header>
  );
};
