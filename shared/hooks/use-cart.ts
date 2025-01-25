import React from 'react';
import { CartStateItem, useCartStore } from '../store';
import { CreateCartItemValues } from '../services/dto/cart.dto';

type ReturnProps = {
  totalAmount: number;
  items: CartStateItem[];
  loading: boolean;
  updateItemQuantity: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
  addCartItem: (values: CreateCartItemValues) => void;
};

export const useCart = (): ReturnProps => {
  const totalAmount = useCartStore((state) => state.totalAmount);
  const fetchCartItems = useCartStore((state) => state.fetchCartItems);
  const items = useCartStore((state) => state.items);
  const updateItemQuantity = useCartStore((state) => state.updateItemQuantity);
  const removeCartItem = useCartStore((state) => state.removeCartItem);
  const loading = useCartStore((state) => state.loading);
  const addCartItem = useCartStore((state) => state.addCartItem);

  React.useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  return { totalAmount, items, updateItemQuantity, removeCartItem, loading, addCartItem };
};
