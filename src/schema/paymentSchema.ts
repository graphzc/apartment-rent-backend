import { PaymentStatus } from '@prisma/client';
import { z } from 'zod';

export const CreatePaymentValidation = z.object({
    bookingId: z.coerce.number().min(1),
    amount: z.coerce.number().min(1),
});

export type CreatePaymentType = z.infer<typeof CreatePaymentValidation>;

export const EditPaymentValidation = z.object({
    bookingId: z.coerce.number().min(1),
    amount: z.coerce.number().min(1),
    slip: z.coerce.string(),
});

export type EditPaymentType = z.infer<typeof EditPaymentValidation>;

export const PaymentValidation = z.object({
    id: z.coerce.number().min(1),
});

export type PaymentType = z.infer<typeof PaymentValidation>;

export const ChangePaymentStatusValidation = z.object({
    id: z.coerce.number().min(1),
    status: z.enum([PaymentStatus.PENDING, PaymentStatus.APPROVED, PaymentStatus.REJECTED, PaymentStatus.UNPAID]),
});

export type ChangePaymentStatusType = z.infer<typeof ChangePaymentStatusValidation>;