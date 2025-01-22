import { instance } from './instance';
import { CartDTO, CreateCartItemValues } from './dto/cart.dto';

export const getCart = async (): Promise<CartDTO> => {
  return (await instance.get<CartDTO>('/cart')).data;
};

export const updateItemQuantity = async (itemId: number, quantity: number): Promise<CartDTO> => {
  return (await instance.patch<CartDTO>(`/cart/` + itemId, { quantity })).data;
};

export const removeCartItem = async (itemId: number): Promise<CartDTO> => {
  return (await instance.delete<CartDTO>(`/cart/` + itemId)).data;
};

export const addCartItem = async (values: CreateCartItemValues): Promise<CartDTO> => {
  return (await instance.post<CartDTO>('/cart', values)).data;
};
