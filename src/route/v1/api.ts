import { Router } from "express"
import { healthCheck } from "@/controller/controller";
import { login, myProfile, refreshToken, register } from "@/controller/authController";
import authMiddleware from "@/middleware/authMiddleware";
import { getAllApartment, getApartment } from "@/controller/apartmentController";
import { getAllRoom, getRoom } from "@/controller/roomController";
import { createBooking, getBookingById, getMyBooking } from "@/controller/bookingController";
import { findPaymentById, uploadSlip } from "@/controller/paymentController";
import { uploadSlipMiddleware } from "@/middleware/fileUploadMiddleware";

const apiRouter = (): Router => {
    const api = Router();

    api.get('/', healthCheck);
    
    // Authentication
    api.post('/auth/login', login);
    api.post('/auth/refresh', refreshToken);
    api.post('/auth/register', register);
    api.get('/auth/profile', authMiddleware, myProfile);

    // Apartment
    api.get('/apartment', getAllApartment);
    api.get('/apartment/:id', getApartment);
    
    // Room
    api.get('/room', getAllRoom);
    api.get('/room/:id', getRoom);

    // Booking
    api.post('/booking', createBooking);
    api.get('/booking/my', authMiddleware, getMyBooking);
    api.get('/booking/:id', getBookingById);
    
    // Payment
    api.get('/payment/:id', findPaymentById);
    api.post('/payment/slip', uploadSlipMiddleware.single('slip') , uploadSlip);
    return api;
}

export default apiRouter;