import { z } from "zod";

export const CreateUtilitySchema = z.object({
    bookingId: z.coerce.number().min(1),
    forMonth: z.coerce.date(),
    electricity: z.coerce.number().min(0),
    plumbing: z.coerce.number().min(0)
});

export type CreateUtilityType = z.infer<typeof CreateUtilitySchema>;

export const UpdateUtilitySchema = z.object({
    bookingId: z.coerce.number().min(1),
    forMonth: z.coerce.date(),
    electricity: z.coerce.number().min(0),
    plumbing: z.coerce.number().min(0)
});

export type UpdateUtilityType = z.infer<typeof UpdateUtilitySchema>;