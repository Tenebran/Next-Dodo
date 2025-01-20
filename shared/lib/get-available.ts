import { ProductItem } from '@prisma/client';
import { pizzaSizes, PizzaTypes } from '../constans/pizza';
import { Variant } from '../components/shared/group-variants';

/**
 * Returns an array of available pizza sizes of a given type, including disabled ones.
 *
 * @param items - list of all available pizza items
 * @param type - type of the pizza
 *
 * @returns array of available pizza sizes, including disabled ones
 */

export const getAvailable = (items: ProductItem[], type: PizzaTypes): Variant[] => {
  const availablePizzasByType = items.filter((item) => item.pizzaType === type);
  const availablePizzas = pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !availablePizzasByType.some((pizza) => Number(pizza.size) === Number(item.value)),
  }));

  return availablePizzas;
};
