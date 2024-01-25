import { z } from 'zod';

export const CreateApartmentValidation = z.object({
    name: z.coerce.string().min(1).max(255),
});

export type CreateApartmentType = z.infer<typeof CreateApartmentValidation>;

export const EditApartmentValidation = z.object({
    name: z.coerce.string().min(1).max(255),
});

export type EditApartmentType = z.infer<typeof EditApartmentValidation>;