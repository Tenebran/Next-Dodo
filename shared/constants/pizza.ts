const mapSize = {
  20: 'Klein',
  30: 'Mittel',
  40: 'Groß',
} as const;

const mapPizzaTypes = {
  1: 'Traditionell',
  2: 'Dünn',
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
