import { cn } from '@/shared/lib/utils';
import { useSession } from 'next-auth/react';
import React from 'react';
import { Button } from '../ui';
import { CircleUser, User } from 'lucide-react';
import Link from 'next/link';

interface Props {
  onCklickSingIn: () => void;
  className?: string;
}

const ProfileButton: React.FC<Props> = ({ onCklickSingIn, className }) => {
  const { data: session } = useSession();

  return (
    <div className={cn('', className)}>
      {!session ? (
        <Button onClick={onCklickSingIn} variant="outline" className="flex items-center gap-1">
          <User size={16} />
          Log in
        </Button>
      ) : (
        <Link href="/profile">
          <Button variant="secondary" className="flex items-center gap-2">
            <CircleUser size={18} />
            Profil
          </Button>
        </Link>
      )}
    </div>
  );
};

export { ProfileButton };
