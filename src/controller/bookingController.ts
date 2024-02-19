import { CreateBookingValidation, EditBookingValidation } from '@/schema/bookingSchema';
import authService from '@/services/authService';
import bookingService from '@/services/bookingService';
import paymentService from '@/services/paymentService';
import roomService from '@/services/roomService';
import userService from '@/services/userService';
import { getJwtTokenHeader } from '@/utils/token';
import { Request, Response } from 'express';
import { ZodError } from 'zod';

export const createBooking = async (req: Request, res: Response) => {
    try {
        const payload = CreateBookingValidation.parse(req.body);
        
        // Create booking
        const booking = await bookingService.createBooking(payload);
        if (!booking) {
            return res.status(400).json({
                message: "Failed to create booking"
            });
        }

        // Find room by id
        const room = await roomService.findRoomById(booking.roomId);
        if (!room) {
            return res.status(404).json({
                message: "Room not found"
            });
        }

        // Calculate amount 
        const amount = room.price * 2;

        // Create payment
        const payment = await paymentService.createPayment({ bookingId: booking.id, amount: amount });
        if (!payment) {
            return res.status(400).json({
                message: "Failed to create payment"
            });
        }

        return res.status(201).json(booking);
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                message: error.issues[0].message
            });
        }
    }
}

export const getMyBooking = async (req: Request, res: Response) => {
    const token = getJwtTokenHeader(req);

    const jwtPayload = await authService.decodeAccessToken(token!);

    const email = jwtPayload.email;

    const user = await userService.findUserByEmail(email);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const bookings = await bookingService.findBookingByUserId(user.id);

    if (!bookings) {
        return res.status(404).json({
            message: "Booking not found"
        });
    }

    return res.status(200).json(bookings);
}

export const getBookingById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const booking = await bookingService.findBookingById(id);

    if (!booking) {
        return res.status(404).json({
            message: "Booking not found"
        });
    }

    return res.status(200).json(booking);
}

export const getAllBooking = async (req: Request, res: Response) => {
    const bookings = await bookingService.getAllBooking();

    return res.status(200).json(bookings);
}

export const editBooking = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const payload = EditBookingValidation.parse(req.body);

    const booking = await bookingService.editBooking(id, payload);

    if (!booking) {
        return res.status(404).json({
            message: "Booking not found"
        });
    }

    return res.status(200).json(booking);
}

export const deleteBooking = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const booking = await bookingService.deleteBooking(id);

    if (!booking) {
        return res.status(404).json({
            message: "Booking not found"
        });
    }

    return res.status(200).json(booking);
}
