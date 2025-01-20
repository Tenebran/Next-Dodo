import { cn } from '@/shared/lib/utils';
import React from 'react';
import Image from 'next/image';
import { Button } from '../ui';
import { CartButton, Container, SeachInput } from '.';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';

interface PropsType {
  className?: string;
}

export const Header: React.FC<PropsType> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image alt="logo" width={35} height={35} src="/logo.png" />
            <div>
              <h1 className="text-2xl uppercase font-black">Next Dodo</h1>
              <p className="text-sm text-gray-400 leading-3">It couldn&apos;t be tastier</p>
            </div>
          </div>
        </Link>
        <div className="mx-10 flex-1">
          <SeachInput />
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Log in
          </Button>
          <div>
            <CartButton />
          </div>
        </div>
      </Container>
    </header>
  );
};
