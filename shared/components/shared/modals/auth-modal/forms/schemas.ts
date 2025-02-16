import { z } from 'zod';

export const passwordSchema = z
  .string()
  .min(6, { message: 'Пароль должен содержать не менее 6 символов' });

export const formLoginSchema = z.object({
  email: z.string().email({ message: 'Некорректный адрес электронной почты' }).trim(),
  password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema
  .merge(
    z.object({
      firstName: z
        .string()
        .min(2, { message: 'Имя должно содержать не менее 2-х символов' })
        .trim(),
      confirmPassword: passwordSchema,
    })
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });

export type TFormLogin = z.infer<typeof formLoginSchema>;
export type TFormRegister = z.infer<typeof formRegisterSchema>;
