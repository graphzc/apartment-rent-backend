"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentStatusSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.PaymentStatusSchema = joi_1.default.string().valid(...["UNPAID", "APPROVED", "REJECTED"]);
