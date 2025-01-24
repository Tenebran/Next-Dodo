import { CartDTO } from '../services/dto/cart.dto';
import { calcCartItemTotalPrice } from './calc-cart-item-total-price';

export type CartStateItem = {
  id: number;
  quantity: number;
  name: string;
  imageUrl: string;
  price: number;
  disabled?: boolean;
  pizzaSize?: number | null;
  pizzaType?: number | null;
  ingredients: Array<{ name: string; price: number }>;
};

interface RetunType {
  totalAmount: number;
  items: CartStateItem[];
}

export const getCartDetails = (data: CartDTO): RetunType => {
  const items = data.items.map(
    (item) =>
      ({
        id: item.id,
        quantity: item.quantity,
        name: item.productItem.product.name,
        imageUrl: item.productItem.product.imageUrl,
        price: calcCartItemTotalPrice(item),
        pizzaSize: item.productItem.size,
        disabled: false,
        pizzaType: item.productItem.pizzaType,
        ingredients: item.ingredients.map((ing) => ({
          name: ing.name,
          price: Number(ing.price),
        })),
      } as CartStateItem)
  );
  return {
    items,
    totalAmount: Number(data.totalAmount),
  };
};
