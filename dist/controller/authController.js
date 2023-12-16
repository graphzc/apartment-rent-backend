"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myProfile = exports.register = exports.refreshToken = exports.login = void 0;
const constant_1 = require("../constant");
const authService_1 = __importDefault(require("../services/authService"));
const authService_2 = __importDefault(require("../services/authService"));
const userService_1 = __importDefault(require("../services/userService"));
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = require("jsonwebtoken");
const token_1 = require("../utils/token");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    // Check user is exist
    const isExist = yield authService_2.default.isUserExist(email);
    if (!isExist) {
        return res.status(401).json({
            message: 'Email is not exist',
        });
    }
    // Check password is correct
    const isPasswordCorrect = yield authService_2.default.checkPassword(email, password);
    if (!isPasswordCorrect) {
        return res.status(401).json({
            message: 'Email or password is not correct',
        });
    }
    // Generate access token and refresh token
    const accessToken = yield authService_2.default.generateAccessToken(email);
    const refreshToken = yield authService_2.default.generateRefreshToken(email);
    const info = yield userService_1.default.findUserByEmail(email);
    return res.status(200).json({
        id: info === null || info === void 0 ? void 0 : info.id,
        email: info === null || info === void 0 ? void 0 : info.email,
        name: info === null || info === void 0 ? void 0 : info.name,
        role: info === null || info === void 0 ? void 0 : info.role,
        accessToken: accessToken,
        refreshToken: refreshToken,
        accessTokenExpires: new Date(Date.now() + constant_1.JWT_ACCESS_EXPIRE_TIME),
        refreshTokenExpires: new Date(Date.now() + constant_1.JWT_REFRESH_EXPIRE_TIME),
    });
});
exports.login = login;
const refreshToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { refreshToken } = req.body;
    if (!refreshToken) {
        return res.status(403).json({
            message: "Authentication failed"
        });
    }
    if (!process.env.REFRESH_TOKEN_SECRET) {
        throw new Error('REFRESH_TOKEN_SECRET is not defined');
    }
    try {
        const decoded = yield authService_2.default.decodeRefreshToken(refreshToken);
        // Generate new access token
        const accessToken = yield authService_2.default.generateAccessToken(decoded.email);
        const newRefreshToken = yield authService_2.default.generateRefreshToken(decoded.email);
        const info = yield userService_1.default.findUserByEmail(decoded.email);
        return res.status(200).json({
            id: info === null || info === void 0 ? void 0 : info.id,
            email: info === null || info === void 0 ? void 0 : info.email,
            name: info === null || info === void 0 ? void 0 : info.name,
            role: info === null || info === void 0 ? void 0 : info.role,
            accessToken: accessToken,
            refreshToken: newRefreshToken,
            accessTokenExpires: new Date(Date.now() + constant_1.JWT_ACCESS_EXPIRE_TIME),
            refreshTokenExpires: new Date(Date.now() + constant_1.JWT_REFRESH_EXPIRE_TIME),
        });
    }
    catch (error) {
        if (error instanceof jsonwebtoken_1.TokenExpiredError) {
            return res.status(403).json({
                message: "Token is expired"
            });
        }
        return res.status(403).json({
            message: "Token is invalid"
        });
    }
});
exports.refreshToken = refreshToken;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    // Check user is exist
    const isExist = yield authService_2.default.isUserExist(email);
    if (isExist) {
        return res.status(401).json({
            message: 'Email is already exist',
        });
    }
    // Create new user
    const user = yield userService_1.default.createUser(name, email, password, client_1.Role.USER);
    // Generate access token and refresh token
    const accessToken = yield authService_2.default.generateAccessToken(email);
    const refreshToken = yield authService_2.default.generateRefreshToken(email);
    return res.status(200).json({
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        accessToken: accessToken,
        refreshToken: refreshToken,
        accessTokenExpires: new Date(Date.now() + constant_1.JWT_ACCESS_EXPIRE_TIME),
        refreshTokenExpires: new Date(Date.now() + constant_1.JWT_REFRESH_EXPIRE_TIME),
    });
});
exports.register = register;
const myProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = (0, token_1.getJwtTokenHeader)(req);
    const jwtPayload = yield authService_1.default.decodeAccessToken(token);
    const email = jwtPayload.email;
    const info = yield userService_1.default.findUserByEmail(email);
    return res.status(200).json({
        id: info === null || info === void 0 ? void 0 : info.id,
        email: info === null || info === void 0 ? void 0 : info.email,
        name: info === null || info === void 0 ? void 0 : info.name,
        role: info === null || info === void 0 ? void 0 : info.role,
    });
});
exports.myProfile = myProfile;
