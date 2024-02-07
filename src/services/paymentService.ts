import { CreatePaymentType } from "@/schema/paymentSchema";
import Prisma from "./prisma";
import { PaymentStatus } from "@prisma/client";

const prisma = Prisma.client()

const getAllPayments = async () => {
    const payments = await prisma.payment.findMany({
        include: {
            booking: {
                include: {
                    room: true
                }
            }
        }
    });
    return payments;
}

const createPayment = async (payment: CreatePaymentType) => {
    const newPayment = await prisma.payment.create({
        data: {
            ...payment,
            status: PaymentStatus.UNPAID
        },
        include: {
            booking: {
                include: {
                    room: true
                }
            }
        }
    });

    return newPayment;
}

const findPaymentById = async (id: number) => {
    const payment = await prisma.payment.findUnique({
        where: {
            id
        },
        include: {
            booking: {
                include: {
                    room: true
                }
            }
        }
    });

    return payment;
}

const deletePayment = async (id: number) => {
    const deleted = await prisma.payment.delete({
        where: {
            id
        }
    });

    return deleted;
}

const updatePaymentStatus = async (id: number, status: PaymentStatus, slip?: string) => {
    const updated = await prisma.payment.update({
        where: {
            id
        },
        data: {
            status,
            slip
        },
        include: {
            booking: {
                include: {
                    room: true
                }
            }
        }
    });

    return updated;
}

export default {
    getAllPayments,
    createPayment,
    findPaymentById,
    deletePayment,
    updatePaymentStatus
}



