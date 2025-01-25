'use client';

import {
  CheckoutItem,
  CheckoutSeidbar,
  Container,
  Title,
  WhiteBlock,
} from '@/shared/components/shared';
import { FormInput } from '@/shared/components/shared/form-components';
import { Input, Textarea } from '@/shared/components/ui';
import { PizzaSizes, PizzaTypes } from '@/shared/constans/pizza';
import { useCart } from '@/shared/hooks/use-cart';
import { getCartItemsDetails } from '@/shared/lib';

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
              <FormInput name="phone" className="text-base" placeholder="Телефон" type="tel" />
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
          <CheckoutSeidbar totalAmount={totalAmount} />
        </div>
      </div>
    </Container>
  );
}
