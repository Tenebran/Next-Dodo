import { useRouter } from 'next/navigation';
import qs from 'qs';
import { useEffect, useRef } from 'react';
import { Filters } from './use-filters';

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();
  const prevFiltersRef = useRef<string | null>(null);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const params = {
        sizes: Array.from(filters.sizes),
        pizzaTypes: Array.from(filters.pizzaTypes),
        ...filters.prices,
        ingredients: Array.from(filters.selectedIngredients),
      };

      const query = qs.stringify(params, { arrayFormat: 'comma' });

      if (prevFiltersRef.current !== query) {
        prevFiltersRef.current = query;
        router.push(`?${query}`, { scroll: false });
      }
    }
    isMounted.current = true;
  }, [filters]);
};
