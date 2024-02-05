import { CreateBookingType } from "@/schema/bookingSchema";
import Prisma from "./prisma";

const prisma = Prisma.client()

const getAllBooking = async () => {
    const bookings = await prisma.booking.findMany({
        include: {
            room: true,
            user: true,
            payment: true
        },
        orderBy: {
            id: 'asc'
        }
    });

    return bookings;
}

const createBooking = async (booking: CreateBookingType) => {
    const newBooking = await prisma.booking.create({
        data: booking,
        include: {
            room: true,
            user: true,
            payment: true
        }
    });

    return newBooking;
}

const findBookingById = async (id: number) => {
    const booking = await prisma.booking.findUnique({
        where: {
            id
        },
        include: {
            room: true,
            user: true,
            payment: true
        }
    });

    return booking;
}

const deleteBooking = async (id: number) => {
    const deleted = await prisma.booking.delete({
        where: {
            id
        },
        include: {
            room: true,
            user: true,
            payment: true
        }
    });

    return deleted;
}

const editBooking = async (id: number, booking: CreateBookingType) => {
    const edited = await prisma.booking.update({
        where: {
            id
        },
        data: {
            ...booking
        },
        include: {
            room: true,
            user: true,
            payment: true
        }
    });

    return edited;
}

export default {
    getAllBooking,
    createBooking,
    findBookingById,
    deleteBooking,
    editBooking,
}



