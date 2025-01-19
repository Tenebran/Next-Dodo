'use client';

import { cn } from '@/shared/lib/utils';
import React from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { Api } from '@/shared/services/api.client';
import { Product } from '@prisma/client';
import { useDebounce } from 'react-use';

interface Props {
  className?: string;
}

const SeachInput: React.FC<Props> = ({ className }) => {
  const [focused, setFocused] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [products, setProducts] = React.useState<Product[]>([]);

  useDebounce(
    () => {
      Api.products.search(searchQuery).then((data) => setProducts(data));
    },
    250,
    [searchQuery]
  );

  const onClikcItem = () => {
    setSearchQuery('');
    setFocused(false);
    setProducts([]);
  };

  return (
    <>
      {focused && (
        <div
          className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30"
          onClick={() => setFocused(false)}
        />
      )}

      <div className={cn('flex rounded-2xl flex-1 justify-between relative h-11 z-30', className)}>
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11 "
          type="text"
          placeholder="Найти пиццу..."
          value={searchQuery}
          onFocus={() => setFocused(true)}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {products.length > 0 && (
          <div
            className={cn(
              'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
              focused && 'visible opacity-100 top-12'
            )}
            onClick={onClikcItem}>
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  width={32}
                  height={32}
                  className="roundered-sm h-8 w-8"
                />

                <span>{product.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export { SeachInput };
