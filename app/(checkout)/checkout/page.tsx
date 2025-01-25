'use client';

import {
  CheckoutItem,
  CheckoutItemDetails,
  Container,
  Title,
  WhiteBlock,
} from '@/shared/components/shared';
import { Button, Input, Textarea } from '@/shared/components/ui';
import { PizzaSizes, PizzaTypes } from '@/shared/constans/pizza';
import { useCart } from '@/shared/hooks/use-cart';
import { getCartItemsDetails } from '@/shared/lib';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
export default function CheckoutPage() {
  const { items, totalAmount, onCklickCountButton, removeCartItem } = useCart();

  return (
    <Container className="mt-10">
      <Title text="Оформление Заказа" className="font-extrabold mb-8 text-[36px]" />
      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Корзина">
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <CheckoutItem
                  key={item.id}
                  disabled={item.disabled}
                  imageUrl={item.imageUrl}
                  name={item.name}
                  price={item.price}
                  details={getCartItemsDetails(
                    item.pizzaType as PizzaTypes,
                    item.pizzaSize as PizzaSizes,
                    item.ingredients
                  )}
                  quantity={item.quantity}
                  id={item.id}
                  onClickCountButton={(type) => onCklickCountButton(item.id, item.quantity, type)}
                  onClickRemove={() => removeCartItem(item.id)}
                />
              ))}
            </div>
          </WhiteBlock>
          <WhiteBlock title="2. Персональные данные">
            <div className="grid grid-cols-2 gap-5">
              <Input name="firstName" className="text-base" placeholder="Имя" />
              <Input name="lastName" className="text-base" placeholder="Фамилия" />
              <Input name="email" className="text-base" placeholder="E-Mail" type="email" />
              <Input name="phone" className="text-base" placeholder="Телефон" type="tel" />
            </div>
          </WhiteBlock>
          <WhiteBlock title="3. Адресс доставки">
            <div className="flex flex-col gap-5">
              <Input name="firstName" className="text-base" placeholder="Адресс" />
              <Textarea rows={5} className="text-base" placeholder="Комментарий к заказу" />
            </div>
          </WhiteBlock>
        </div>
        <div className="w-[450px]">
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1">
              <span className="text-xl">Итого:</span>
              <span className="text-[34px] font-extrabold">{totalAmount} $</span>
            </div>
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Package size={18} className="mr-2 text-gray-300" />
                  Стоимость товаров
                </div>
              }
              value="3500 ₽"
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Percent size={18} className="mr-2 text-gray-300" />
                  Налоги
                </div>
              }
              value="3500 ₽"
            />
            <CheckoutItemDetails
              title={
                <div className="flex items-center">
                  <Truck size={18} className="mr-2 text-gray-300" />
                  Доставка
                </div>
              }
              value="3500 ₽"
            />

            <Button type="submit" className="w-full h-14 rounded-2xl mt-6 text-base font-bold">
              Перейти к оплате
              <ArrowRight className="w-5 ml-2" />
            </Button>
          </WhiteBlock>
        </div>
      </div>
    </Container>
  );
}
