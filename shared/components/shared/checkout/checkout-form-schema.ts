import { z } from 'zod';

export const checkoutFormSchema = z.object({
  firstName: z.string().min(2, { message: 'Имя должно содержать не менее 2-х символа' }),
  lastName: z.string().min(2, { message: 'Фамилия должна содержать не менее 2-х символов' }),
  email: z.string().email({ message: 'Некорректная почта' }),
  phone: z.string().min(10, { message: 'Введите корректный номер телефона' }),
  adress: z.string().min(5, { message: 'Адрес должен содержать не менее 5 символов' }),
  comment: z.string().optional(),
});

export type TCheckoutFormValues = z.infer<typeof checkoutFormSchema>;
