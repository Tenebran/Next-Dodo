import { Ingredient, ProductItem } from '@prisma/client';
import { calcTotalPizzaPrice } from './calc-total-pizza-price';
import { PizzaSizes, PizzaTypes } from '../constants/pizza';

/**
 * Calculate total price of a pizza, given its size, type, and selected ingredients
 * and return a object with total price and text details of pizza
 *
 * @param items - list of all available pizza items
 * @param ingredients - list of all available ingredients
 * @param size - size of the pizza
 * @param type - type of the pizza
 * @param selectedIngredients - set of ids of selected ingredients
 * @param mapPizzaTypes - object that maps pizza type to its name
 *
 * @returns object with total price of the pizza and text details of pizza
 */
export const getPizzaDetails = (
  items: ProductItem[],
  ingredients: Ingredient[],
  size: PizzaSizes,
  type: PizzaTypes,
  selectedIngredients: Set<number>,
  mapPizzaTypes: Record<PizzaTypes, string>
) => {
  const totalPrice = calcTotalPizzaPrice(items, ingredients, size, type, selectedIngredients);

  const textDetails = `${size} см,  ${mapPizzaTypes[type]} тесто`;
  return { totalPrice, textDetails };
};
