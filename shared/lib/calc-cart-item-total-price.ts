import { CartItemDTO } from '../services/dto/cart.dto';

export const calcCartItemTotalPrice = (item: CartItemDTO) => {
  const ingredientsPrice = item.ingredients.reduce((acc, ing) => acc + Number(ing.price), 0);

  return (ingredientsPrice + Number(item.productItem.price)) * item.quantity;
};
