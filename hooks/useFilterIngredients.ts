import { Api } from '@/services/api.client';
import { Ingredient } from '@prisma/client';
import React from 'react';

interface RetunsProps {
  ingredients: Ingredient[];
  loading: boolean;
}
export const useFilterIngredients = (): RetunsProps => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchIngredients() {
      setLoading(true);
      try {
        const ingredients = await Api.ingredients.getAll();
        setIngredients(ingredients);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchIngredients();
  }, []);

  return { ingredients, loading };
};
