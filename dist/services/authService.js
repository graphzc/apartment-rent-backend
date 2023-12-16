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
const userService_1 = __importDefault(require("./userService"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const isUserExist = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userService_1.default.findUserByEmail(email);
    return !!user;
});
const checkPassword = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userService_1.default.findUserByEmail(email);
    if (!user) {
        return false;
    }
    return bcrypt_1.default.compareSync(password, user.password);
});
const generateAccessToken = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userService_1.default.findUserByEmail(email);
    if (!process.env.ACCESS_TOKEN_SECRET) {
        throw new Error('ACCESS_TOKEN_SECRET is not defined');
    }
    const token = jsonwebtoken_1.default.sign({
        id: user === null || user === void 0 ? void 0 : user.id,
        email: user === null || user === void 0 ? void 0 : user.email,
        role: user === null || user === void 0 ? void 0 : user.role,
        name: user === null || user === void 0 ? void 0 : user.name,
    }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '1h',
    });
    return token;
});
const generateRefreshToken = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userService_1.default.findUserByEmail(email);
    if (!process.env.REFRESH_TOKEN_SECRET) {
        throw new Error('REFRESH_TOKEN_SECRET is not defined');
    }
    const token = jsonwebtoken_1.default.sign({
        id: user === null || user === void 0 ? void 0 : user.id,
        email: user === null || user === void 0 ? void 0 : user.email,
        role: user === null || user === void 0 ? void 0 : user.role,
        name: user === null || user === void 0 ? void 0 : user.name,
    }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '7d',
    });
    return token;
});
const decodeRefreshToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    if (!process.env.REFRESH_TOKEN_SECRET) {
        throw new Error('REFRESH_TOKEN_SECRET is not defined');
    }
    const decoded = jsonwebtoken_1.default.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            throw new Error('Token is invalid');
        }
        return decoded;
    });
    if (decoded.exp && Date.now() >= decoded.exp * 1000) {
        throw new jsonwebtoken_1.default.TokenExpiredError('Token is expired', new Date(decoded.exp));
    }
    return decoded;
});
const decodeAccessToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    if (!process.env.ACCESS_TOKEN_SECRET) {
        throw new Error('ACCESS_TOKEN_SECRET is not defined');
    }
    const decoded = jsonwebtoken_1.default.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            throw new Error('Token is invalid');
        }
        return decoded;
    });
    if (decoded.exp && Date.now() >= decoded.exp * 1000) {
        throw new jsonwebtoken_1.default.TokenExpiredError('Token is expired', new Date(decoded.exp));
    }
    return decoded;
});
exports.default = {
    isUserExist,
    checkPassword,
    generateAccessToken,
    generateRefreshToken,
    decodeRefreshToken,
    decodeAccessToken,
};
