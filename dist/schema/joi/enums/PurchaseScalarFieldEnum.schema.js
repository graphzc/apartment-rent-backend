"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseScalarFieldEnumSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.PurchaseScalarFieldEnumSchema = joi_1.default.string().valid(...["id", "poolId", "productId", "customerOrderId", "quantity", "createdAt", "updatedAt"]);
