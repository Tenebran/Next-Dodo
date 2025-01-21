import { mapPizzaTypes, PizzaSizes, PizzaTypes } from '@/shared/constans/pizza';
import { Ingredient } from '@prisma/client';

interface Props {
  name: string;
  pizzaSize?: PizzaSizes;
  type?: PizzaTypes;
  ingredients?: Ingredient[];
}

export const CartItemInfo: React.FC<Props> = ({ name, pizzaSize, type, ingredients }) => {
  const details = [];

  if (pizzaSize && type) {
    const typeName = mapPizzaTypes[type];
    details.push(`${typeName} ${pizzaSize} см`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold flex-1 leading-6">{name}</h2>
      </div>
      {details.length > 0 && <p className="text-xs text-gray-400">{details.join(', ')}</p>}
    </div>
  );
};
