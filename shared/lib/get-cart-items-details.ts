import { mapPizzaTypes, PizzaSizes, PizzaTypes } from '../constants/pizza';
import { CartStateItem } from './get-cart-details';

export const getCartItemsDetails = (
  pizzaType: PizzaTypes,
  pizzaSize: PizzaSizes,
  ingredients: CartStateItem['ingredients']
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
