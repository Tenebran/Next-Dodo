import { Ingredient } from '@prisma/client';
import { mapPizzaTypes, PizzaSizes, PizzaTypes } from '../constans/pizza';

export const getCartItemsDetails = (
  pizzaType: PizzaTypes,
  pizzaSize: PizzaSizes,
  ingredients: Ingredient[]
): string => {
  const details = [];

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaTypes[pizzaType];
    details.push(`${typeName} ${pizzaSize} см`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }
  return details.join(', ');
};
