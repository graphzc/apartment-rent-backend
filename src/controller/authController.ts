import { JWT_ACCESS_EXPIRE_TIME, JWT_REFRESH_EXPIRE_TIME } from '@/constant';
import authService from '@/services/authService';
import auth from "@/services/authService";
import userService from '@/services/userService';
import { Role } from '@prisma/client';
import type { Request, Response } from "express"
import { TokenExpiredError } from 'jsonwebtoken';
import { getJwtTokenHeader } from '@/utils/token';

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    
    // Check user is exist
    const isExist = await auth.isUserExist(email);
    if (!isExist) {
        return res.status(401).json({
            message: 'Email is not exist',
        });
    }

    // Check password is correct
    const isPasswordCorrect = await auth.checkPassword(email, password);
    if (!isPasswordCorrect) {
        return res.status(401).json({
            message: 'Email or password is not correct',
        });
    }

    // Generate access token and refresh token
    const accessToken = await auth.generateAccessToken(email);
    const refreshToken = await auth.generateRefreshToken(email);
    
    const info = await userService.findUserByEmail(email);

    return res.status(200).json({
        id: info?.id,
        email: info?.email,
        name: info?.name,
        role: info?.role,
        accessToken: accessToken,
        refreshToken: refreshToken,
        accessTokenExpires: new Date(Date.now() + JWT_ACCESS_EXPIRE_TIME),
        refreshTokenExpires: new Date(Date.now() + JWT_REFRESH_EXPIRE_TIME),
    });
}

export const refreshToken = async (req: Request, res: Response) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(403).json({
            message: "Authentication failed"
        })
    }

    if (!process.env.REFRESH_TOKEN_SECRET) {
        throw new Error('REFRESH_TOKEN_SECRET is not defined');
    }

    try {
        const decoded = await auth.decodeRefreshToken(refreshToken)

        // Generate new access token
        const accessToken = await auth.generateAccessToken(decoded.email);
        const newRefreshToken = await auth.generateRefreshToken(decoded.email);

        const info = await userService.findUserByEmail(decoded.email);

        return res.status(200).json({
            id: info?.id,
            email: info?.email,
            name: info?.name,
            role: info?.role,
            accessToken: accessToken,
            refreshToken: newRefreshToken,
            accessTokenExpires: new Date(Date.now() + JWT_ACCESS_EXPIRE_TIME),
            refreshTokenExpires: new Date(Date.now() + JWT_REFRESH_EXPIRE_TIME),
        });
    } catch (error) {
        if (error instanceof TokenExpiredError) {
            return res.status(403).json({
                message: "Token is expired"
            });
        }
            
        return res.status(403).json({
            message: "Token is invalid"
        });
    }
}

export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    // Check user is exist
    const isExist = await auth.isUserExist(email);
    if (isExist) {
        return res.status(401).json({
            message: 'Email is already exist',
        });
    }

    // Create new user
    const user = await userService.createUser(name, email, password, Role.USER);

    // Generate access token and refresh token
    const accessToken = await auth.generateAccessToken(email);
    const refreshToken = await auth.generateRefreshToken(email);

    return res.status(200).json({
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        accessToken: accessToken,
        refreshToken: refreshToken,
        accessTokenExpires: new Date(Date.now() + JWT_ACCESS_EXPIRE_TIME),
        refreshTokenExpires: new Date(Date.now() + JWT_REFRESH_EXPIRE_TIME),
    });
}

export const myProfile = async (req: Request, res: Response) => {
    const token = getJwtTokenHeader(req);

    const jwtPayload = await authService.decodeAccessToken(token!);

    const email = jwtPayload.email;

    const info = await userService.findUserByEmail(email);

    return res.status(200).json({
        id: info?.id,
        email: info?.email,
        name: info?.name,
        role: info?.role,
    });
}