import userService from '@/services/userService';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JwtPayload } from '@/schema/jwtSchema';

const isUserExist = async (email: string): Promise<boolean> => {
    const user = await userService.findUserByEmail(email);
    return !!user;
};

const checkPassword = async (email: string, password: string): Promise<boolean> => {
    const user = await userService.findUserByEmail(email);
    
    if (!user) {
        return false;
    }

    return bcrypt.compareSync(password, user.password);
};

const generateAccessToken = async (email: string): Promise<string> => {
    const user = await userService.findUserByEmail(email);

    if (!process.env.ACCESS_TOKEN_SECRET) {
        throw new Error('ACCESS_TOKEN_SECRET is not defined');
    }

    const token = jwt.sign(
        {
            id: user?.id,
            email: user?.email,
            role: user?.role,
            name: user?.name,
        }, 
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: '1h',
        }
    );
    
    return token;
};

const generateRefreshToken = async (email: string): Promise<string> => {
    const user = await userService.findUserByEmail(email);

    if (!process.env.REFRESH_TOKEN_SECRET) {
        throw new Error('REFRESH_TOKEN_SECRET is not defined');
    }

    const token = jwt.sign(
        {
            id: user?.id,
            email: user?.email,
            role: user?.role,
            name: user?.name,
        }, 
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: '7d',
        }
    );

    return token;
};

const decodeRefreshToken = async (token: string): Promise<JwtPayload> => {
    if (!process.env.REFRESH_TOKEN_SECRET) {
        throw new Error('REFRESH_TOKEN_SECRET is not defined');
    }

    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            throw new Error('Token is invalid');
        }
        return decoded;
    }) as unknown as JwtPayload;

    if (decoded.exp && Date.now() >= decoded.exp * 1000) {
        throw new jwt.TokenExpiredError('Token is expired', new Date(decoded.exp));
    }
    return decoded;
}

const decodeAccessToken = async (token: string): Promise<JwtPayload> => {
    if (!process.env.ACCESS_TOKEN_SECRET) {
        throw new Error('ACCESS_TOKEN_SECRET is not defined');
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            throw new Error('Token is invalid');
        }
        return decoded;
    }) as unknown as JwtPayload;
    if (decoded.exp && Date.now() >= decoded.exp * 1000) {
        throw new jwt.TokenExpiredError('Token is expired', new Date(decoded.exp));
    }
    return decoded as unknown as JwtPayload;
}

export default {
    isUserExist,
    checkPassword,
    generateAccessToken,
    generateRefreshToken,
    decodeRefreshToken,
    decodeAccessToken,
}