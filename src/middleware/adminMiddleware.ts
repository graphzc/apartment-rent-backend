import type { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import authService from "@/services/authService"
import { Role } from "@prisma/client"
const adminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.headers["authorization"]) {
            return res.sendStatus(403).json({
                message: "Authentication failed"
            })
        }

        if (!process.env.ACCESS_TOKEN_SECRET) {
            throw new Error('ACCESS_TOKEN_SECRET is not defined');
        }

        const token = req.headers["authorization"].replace("Bearer ", "")

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        // Check role
        const decoded = await authService.decodeAccessToken(token);
        if (decoded.role !== Role.ADMIN) {
            return res.sendStatus(403).json({
                message: "Authentication failed"
            })
        }
        next();
    } catch (error) {
        return res.sendStatus(403).json({
            message: "Token is invalid"
        })
    }
}

export default adminMiddleware;