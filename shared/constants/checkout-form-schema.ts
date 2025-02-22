import { z } from 'zod';

export const checkoutFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'Der Vorname muss mindestens 2 Zeichen enthalten' })
    .trim(),
  lastName: z
    .string()
    .min(2, { message: 'Der Nachname muss mindestens 2 Zeichen enthalten' })
    .trim(),
  email: z.string().email({ message: 'Ungültige E-Mail-Adresse' }).trim(),
  phone: z
    .string()
    .min(10, { message: 'Bitte geben Sie eine gültige Telefonnummer ein' })
    .regex(/^\+?[0-9\s\-]+$/, {
      message: 'Bitte geben Sie die Telefonnummer im korrekten Format ein',
    }),
  address: z
    .string()
    .min(1, { message: 'Die Adresse ist erforderlich' })
    .min(5, { message: 'Die Adresse muss mindestens 5 Zeichen enthalten' })
    .trim(),
  comment: z.string().optional(),
});

export type TCheckoutFormValues = z.infer<typeof checkoutFormSchema>;
