'use client';

import { cn } from '@/shared/lib/utils';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { AuthModal, CartButton, Container, ProfileButton, SeachInput } from '.';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

interface PropsType {
  className?: string;
  hasSearch: boolean;
  hasCart?: boolean;
}

export const Header: React.FC<PropsType> = ({ className, hasSearch, hasCart }) => {
  const [openAuthModal, setOpenAuthModal] = React.useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.has('paid')) {
      toast.success('Zahlung erfolgreich');
      router.replace('/');
    }

    if (searchParams.has('verified')) {
      toast.success('E-Mail erfolgreich bestätigt!');
      router.replace('/');
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
              <p className="text-sm text-gray-400 leading-3">Es könnte nicht leckerer sein</p>
            </div>
          </div>
        </Link>
        <div className="mx-10 flex-1">{hasSearch && <SeachInput />}</div>
        <div className="flex items-center gap-3">
          <AuthModal open={openAuthModal} onClose={() => setOpenAuthModal(false)} />
          <ProfileButton onCklickSingIn={() => setOpenAuthModal(true)} />
          <div>{hasCart && <CartButton />}</div>
        </div>
      </Container>
    </header>
  );
};
