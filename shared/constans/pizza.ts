const mapSize = {
  20: 'Маленькая',
  30: 'Средняя',
  40: 'Большая',
} as const;

const mapPizzaTypes = {
  1: 'Тонкое',
  2: 'Традиционное',
} as const;

const pizzaSizes = Object.entries(mapSize).map(([value, name]) => ({
  name,
  value,
}));

const pizzaTypes = Object.entries(mapPizzaTypes).map(([value, name]) => ({
  name,
  value,
}));

export type PizzaSizes = keyof typeof mapSize;
export type PizzaTypes = keyof typeof mapPizzaTypes;

export { pizzaSizes, mapSize, mapPizzaTypes, pizzaTypes };
