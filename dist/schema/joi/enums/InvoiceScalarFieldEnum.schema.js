"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceScalarFieldEnumSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.InvoiceScalarFieldEnumSchema = joi_1.default.string().valid(...["id", "paidAt", "vatIncluded", "createdAt", "updatedAt"]);
