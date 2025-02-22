import { z } from 'zod';

export const passwordSchema = z
  .string()
  .min(6, { message: 'Das Passwort muss mindestens 6 Zeichen enthalten' });

export const formLoginSchema = z.object({
  email: z.string().email({ message: 'Ungültige E-Mail-Adresse' }).trim(),
  password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema
  .merge(
    z.object({
      fullName: z.string().min(2, { message: 'Bitte geben Sie Ihren Vor- und Nachnamen ein' }),
      confirmPassword: passwordSchema,
    })
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwörter stimmen nicht überein',
    path: ['confirmPassword'],
  });

export type TFormLogin = z.infer<typeof formLoginSchema>;
export type TFormRegister = z.infer<typeof formRegisterSchema>;
