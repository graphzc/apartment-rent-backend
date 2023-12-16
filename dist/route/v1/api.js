"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../../controller/controller");
const authController_1 = require("../../controller/authController");
const authMiddleware_1 = __importDefault(require("../../middleware/authMiddleware"));
const apartmentController_1 = require("../../controller/apartmentController");
const apiRouter = () => {
    const api = (0, express_1.Router)();
    api.get('/', controller_1.healthCheck);
    // Authentication
    api.post('/auth/login', authController_1.login);
    api.post('/auth/refresh', authController_1.refreshToken);
    api.post('/auth/register', authController_1.register);
    api.get('/auth/profile', authMiddleware_1.default, authController_1.myProfile);
    // Apartment
    api.get('/apartment', apartmentController_1.getAllApartment);
    api.get('/apartment/:id', apartmentController_1.getApartment);
    return api;
};
exports.default = apiRouter;
