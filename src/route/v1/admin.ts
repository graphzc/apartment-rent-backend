import { createApartment, deleteApartment, getAllApartment, getApartment, updateApartment } from "@/controller/apartmentController";
import { changePaymentStatus, findPaymentById, getAllPayments } from "@/controller/paymentController";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from "@/controller/roomController";
import { deleteUser, getAllUser, getUser } from "@/controller/userController";
import adminMiddleware from "@/middleware/adminMiddleware";
import { Router } from "express";

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
    return admin;
}

export default adminRouter;