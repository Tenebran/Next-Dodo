'use client';

import { cn } from '@/shared/lib/utils';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { Button } from '../ui';
import { CartButton, Container, SeachInput } from '.';
import { User } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

interface PropsType {
  className?: string;
  hasSearch: boolean;
  hasCart?: boolean;
}

export const Header: React.FC<PropsType> = ({ className, hasSearch, hasCart }) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.has('paid')) {
      toast.success('Payment successful');
    }
  }, []);

  return (
    <header className={cn('border-b', className)}>
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
        <div className="mx-10 flex-1">{hasSearch && <SeachInput />}</div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Log in
          </Button>
          <div>{hasCart && <CartButton />}</div>
        </div>
      </Container>
    </header>
  );
};
