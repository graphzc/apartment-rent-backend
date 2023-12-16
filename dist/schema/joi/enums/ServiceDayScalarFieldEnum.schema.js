"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDayScalarFieldEnumSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.ServiceDayScalarFieldEnumSchema = joi_1.default.string().valid(...["id", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "createdAt", "updatedAt"]);
