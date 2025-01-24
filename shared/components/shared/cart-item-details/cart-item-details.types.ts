export interface CartItemProps {
  imageUrl: string;
  name: string;
  price: number;
  details: string;
  quantity: number;
  id: number;
  disabled?: boolean;
}
