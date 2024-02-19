import { z } from 'zod';

export const CreateNewsValidation = z.object({
    title: z.coerce.string(),
    content: z.coerce.string(),
    endDate: z.coerce.date(),
});

export type CreateNewsType = z.infer<typeof CreateNewsValidation>;

export const EditNewsValidation = z.object({
    title: z.coerce.string(),
    content: z.coerce.string(),
    endDate: z.coerce.date(),
});

export type EditNewsType = z.infer<typeof EditNewsValidation>;
