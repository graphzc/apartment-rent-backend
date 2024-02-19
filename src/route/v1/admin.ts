import { createApartment, deleteApartment, getAllApartment, getApartment, updateApartment } from "@/controller/apartmentController";
import { createNews, deleteNews, getAllNews, getNewsById, updateNews } from "@/controller/newsController";
import { changePaymentStatus, findPaymentById, getAllPayments } from "@/controller/paymentController";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from "@/controller/roomController";
import { deleteBooking, getAllBooking, getBookingById } from "@/controller/bookingController";
import { deleteUser, getAllUser, getUser } from "@/controller/userController";
import adminMiddleware from "@/middleware/adminMiddleware";
import { Router } from "express";
import { createUtility, getAllUtility, getUtilityById } from "@/controller/utilityController";

const adminRouter = () : Router => {
    const admin = Router();

    // Apartment
    admin.get('/apartment', adminMiddleware, getAllApartment);
    admin.get('/apartment/:id', adminMiddleware, getApartment);
    admin.post('/apartment', adminMiddleware, createApartment); 
    admin.delete('/apartment/:id', adminMiddleware, deleteApartment);
    admin.put('/apartment/:id', adminMiddleware, updateApartment);

    // Room
    admin.get('/room', adminMiddleware, getAllRoom);
    admin.get('/room/:id', adminMiddleware, getRoom);
    admin.post('/room',adminMiddleware,createRoom ); 
    admin.delete('/room/:id', adminMiddleware, deleteRoom);
    admin.put('/room/:id', adminMiddleware, updateRoom);

    // User
    admin.get('/user', adminMiddleware, getAllUser);
    admin.get('/user/:id', adminMiddleware, getUser);
    admin.delete('/user/:id', adminMiddleware, deleteUser);

    // Payment
    admin.get('/payment/', adminMiddleware, getAllPayments);
    admin.get('/payment/:id', adminMiddleware, findPaymentById);
    admin.post('/payment/status', adminMiddleware, changePaymentStatus);
    
    // News
    admin.get('/news', adminMiddleware, getAllNews);
    admin.get('/news/:id', adminMiddleware, getNewsById);
    admin.post('/news', adminMiddleware, createNews);
    admin.put('/news/:id', adminMiddleware, updateNews);
    admin.delete('/news/:id', adminMiddleware, deleteNews);

    // Booking
    admin.get('/booking', adminMiddleware, getAllBooking);
    admin.get('/booking/:id', adminMiddleware, getBookingById);
    admin.delete('/booking/:id', adminMiddleware, deleteBooking);
    
    // Utility
    admin.get('/utility', adminMiddleware, getAllUtility);
    admin.get('/utility/:id', adminMiddleware, getUtilityById);
    admin.post('/utility', adminMiddleware, createUtility);

    return admin;
}

export default adminRouter;