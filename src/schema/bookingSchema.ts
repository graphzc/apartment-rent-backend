import { z } from 'zod';

export const CreateBookingValidation = z.object({
    roomId: z.coerce.number().min(1),
    userId: z.coerce.string(),
    startDate: z.coerce.date(),
    duration: z.coerce.number().min(1),
});

export type CreateBookingType = z.infer<typeof CreateBookingValidation>;

export const EditBookingValidation = z.object({
    roomId: z.coerce.number().min(1),
    userId: z.coerce.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    duration: z.coerce.number().min(1),
});

export type EditBookingType = z.infer<typeof EditBookingValidation>;