import { Product } from '@prisma/client';
import { instance } from './instance';

export const search = async (query: string) => {
  const { data } = await instance.get<Product>(`/products/search`, {
    params: { query },
  });
  return data;
};
