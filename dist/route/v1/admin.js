"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apartmentController_1 = require("../../controller/apartmentController");
const adminMiddleware_1 = __importDefault(require("../../middleware/adminMiddleware"));
const express_1 = require("express");
const adminRouter = () => {
    const admin = (0, express_1.Router)();
    // Apartment
    admin.get('/apartment', adminMiddleware_1.default, apartmentController_1.getAllApartment);
    admin.get('/apartment/:id', adminMiddleware_1.default, apartmentController_1.getApartment);
    admin.post('/apartment', adminMiddleware_1.default, apartmentController_1.createApartment);
    admin.delete('/apartment/:id', adminMiddleware_1.default, apartmentController_1.deleteApartment);
    admin.put('/apartment/:id', adminMiddleware_1.default, apartmentController_1.updateApartment);
    return admin;
};
exports.default = adminRouter;
