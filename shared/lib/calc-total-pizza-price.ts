import { Ingredient, ProductItem } from '@prisma/client';
import { PizzaSizes, PizzaTypes } from '../constans/pizza';

export const calcTotalPizzaPrice = (
  items: ProductItem[],
  ingredients: Ingredient[],
  size: PizzaSizes,
  type: PizzaTypes,
  selectedIngredients: Set<number>
) => {
  const pizzaPrice = Number(
    items.find((item) => item.pizzaType === type && item.size === size)?.price
  );
  const totalIngredientsPrice = ingredients
    .filter((ing) => selectedIngredients.has(ing.id))
    .reduce((sum, ing) => sum + Number(ing.price), 0);

  return pizzaPrice + totalIngredientsPrice;
};
