import { instance } from './instance';
import { CartDTO } from './dto/cart.dto';

export const fetchCart = async (): Promise<CartDTO> => {
  const { data } = await instance.get<CartDTO>('/cart');
  return data;
};
