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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authService_1 = __importDefault(require("../services/authService"));
const client_1 = require("@prisma/client");
const adminMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.headers["authorization"]) {
            return res.sendStatus(403).json({
                message: "Authentication failed"
            });
        }
        if (!process.env.ACCESS_TOKEN_SECRET) {
            throw new Error('ACCESS_TOKEN_SECRET is not defined');
        }
        const token = req.headers["authorization"].replace("Bearer ", "");
        jsonwebtoken_1.default.verify(token, process.env.ACCESS_TOKEN_SECRET);
        // Check role
        const decoded = yield authService_1.default.decodeAccessToken(token);
        if (decoded.role !== client_1.Role.ADMIN) {
            return res.sendStatus(403).json({
                message: "Authentication failed"
            });
        }
        next();
    }
    catch (error) {
        return res.sendStatus(403).json({
            message: "Token is invalid"
        });
    }
});
exports.default = adminMiddleware;
