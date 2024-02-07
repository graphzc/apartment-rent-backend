import { CreateBookingType } from "@/schema/bookingSchema";
import Prisma from "./prisma";

const prisma = Prisma.client()

const getAllBooking = async () => {
    const bookings = await prisma.booking.findMany({
        include: {
            room: true,
            user: true,
            payment: {
                orderBy: {
                    id: 'desc'
                }
            }
        },
        orderBy: {
            id: 'asc'
        }
    });

    return bookings;
}

const createBooking = async (booking: CreateBookingType) => {
    const newBooking = await prisma.booking.create({
        data: {
            ...booking,
            startDate: new Date(booking.startDate),
            endDate: new Date(booking.startDate.setMonth(booking.startDate.getMonth()+ booking.duration)),
        },
        include: {
            room: true,
            user: true,
            payment: {
                orderBy: {
                    id: 'desc'
                }
            }
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
            payment: {
                orderBy: {
                    id: 'desc'
                }
            }
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
            payment: {
                orderBy: {
                    id: 'desc'
                }
            }
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
            payment: {
                orderBy: {
                    id: 'desc'
                }
            }
        }
    });

    return edited;
}

const findBookingByUserId = async (userId: string) => {
    const bookings = await prisma.booking.findMany({
        where: {
            userId
        },
        include: {
            room: true,
            user: true,
            payment: {
                orderBy: {
                    id: 'desc'
                }
            }
        }
    });

    return bookings;
}


export default {
    getAllBooking,
    createBooking,
    findBookingById,
    deleteBooking,
    editBooking,
    findBookingByUserId,
}



