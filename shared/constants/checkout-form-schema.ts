import { z } from 'zod';

export const checkoutFormSchema = z.object({
  firstName: z.string().min(2, { message: 'Имя должно содержать не менее 2-х символов' }).trim(),
  lastName: z.string().min(2, { message: 'Фамилия должна содержать не менее 2-х символов' }).trim(),
  email: z.string().email({ message: 'Некорректный адрес электронной почты' }).trim(),
  phone: z
    .string()
    .min(10, { message: 'Введите корректный номер телефона' })
    .regex(/^\+?[0-9\s\-]+$/, { message: 'Введите номер телефона в корректном формате' }),
  address: z
    .string()
    .min(1, { message: 'Адрес обязателен' })
    .min(5, { message: 'Адрес должен содержать не менее 5 символов' })
    .trim(),
  comment: z.string().optional(),
});
export type TCheckoutFormValues = z.infer<typeof checkoutFormSchema>;
