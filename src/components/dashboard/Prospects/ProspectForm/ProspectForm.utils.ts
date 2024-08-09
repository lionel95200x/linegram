import { z } from 'zod';

export const prospectSchema = z.object({
  firstName: z.string().min(1, 'Le prénom est requis').optional(),
  lastName: z.string().min(1, 'Le nom est requis').optional(),
  phone: z.string().min(1, 'Le téléphone est requis'),
  email: z.string().email('Adresse email invalide'),
  extraInfo: z.string().optional(),
});

export const FORM_ID = 'prospect-form';

export type ProspectFormValues = z.infer<typeof prospectSchema>;
