import { z } from 'zod';

export const CreateRoomValidation = z.object({
    no: z.coerce.number().min(1).max(255),
    apartmentId : z.coerce.number().min(1),

});

export type CreateRoomType = z.infer<typeof CreateRoomValidation>;

export const EditRoomValidation = z.object({
    no: z.coerce.number().min(1).max(255),
    apartmentId : z.coerce.number().min(1),
});

export type EditRoomType = z.infer<typeof EditRoomValidation>;