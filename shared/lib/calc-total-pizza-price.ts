import { Ingredient, ProductItem } from '@prisma/client';
import { PizzaSizes, PizzaTypes } from '../constants/pizza';

/**
 * Calculate total price of a pizza, given its size, type, and selected ingredients
 *
 * @param items - list of all available pizza items
 * @param ingredients - list of all available ingredients
 * @param size - size of the pizza
 * @param type - type of the pizza
 * @param selectedIngredients - set of ids of selected ingredients
 *
 * @returns total price of the pizza, including all selected ingredients
 */
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
