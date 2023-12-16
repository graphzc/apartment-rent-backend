"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderScalarFieldEnumSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.CustomerOrderScalarFieldEnumSchema = joi_1.default.string().valid(...["id", "customerId", "employeeId", "invoiceId", "createdAt", "updatedAt"]);
