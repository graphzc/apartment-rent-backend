"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductScalarFieldEnumSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.ProductScalarFieldEnumSchema = joi_1.default.string().valid(...["id", "code", "name", "description", "price", "unit", "createdAt", "updatedAt"]);
