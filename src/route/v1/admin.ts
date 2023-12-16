import { createApartment, deleteApartment, getAllApartment, getApartment, updateApartment } from "@/controller/apartmentController";
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



    return admin;
}

export default adminRouter;