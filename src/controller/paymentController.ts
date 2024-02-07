import { ChangePaymentStatusValidation, PaymentValidation } from '@/schema/paymentSchema';
import paymentService from '@/services/paymentService';
import { PaymentStatus } from '@prisma/client';
import { Request, Response } from 'express';
import { ZodError } from 'zod';

export const uploadSlip = async (req: Request, res: Response) => {
    const slip = req.file;
    if (!slip) {
        return res.status(400).json({
            message: "Slip is required"
        });
    }
    try {
        const payload = PaymentValidation.parse(req.body);

        const payment = paymentService.updatePaymentStatus(payload.id, PaymentStatus.PENDING, slip.filename);
        if (!payment) {
            return res.status(400).json({
                message: "Failed to upload slip"
            });
        }
    
        return res.status(200).json(payment);
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                message: error.issues[0].message
            });
        }
    }
} 

export const changePaymentStatus = async (req: Request, res: Response) => {
    const payload = ChangePaymentStatusValidation.parse(req.body);

    try {
        const payment = await paymentService.updatePaymentStatus(payload.id, payload.status);
        if (!payment) {
            return res.status(400).json({
                message: "Failed to confirm payment"
            });
        }

        if (payload.status === PaymentStatus.REJECTED) {
            // Create new payment
            const newPayment = paymentService.createPayment({
                bookingId: payment.bookingId,
                amount: payment.amount
            });

            if (!newPayment) {
                return res.status(400).json({
                    message: "Failed to create new payment"
                });
            }

            return res.status(200).json(newPayment);
        }

        return res.status(200).json(payment)       
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                message: error.issues[0].message
            });
        }
    }
}

export const getAllPayments = async (req: Request, res: Response) => {
    const payments = await paymentService.getAllPayments();

    return res.status(200).json(payments);
}

export const findPaymentById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const payment = await paymentService.findPaymentById(id);

    if (!payment) {
        return res.status(404).json({
            message: "Payment not found"
        });
    }

    return res.status(200).json(payment);
}