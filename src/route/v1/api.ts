import { Router } from "express"
import { healthCheck } from "@/controller/controller";
import { login, myProfile, refreshToken, register } from "@/controller/authController";
import authMiddleware from "@/middleware/authMiddleware";
import { getAllApartment, getApartment } from "@/controller/apartmentController";

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
    
    return api;
}

export default apiRouter;