"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScalarFieldEnumSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.UserScalarFieldEnumSchema = joi_1.default.string().valid(...["id", "email", "name", "password", "role", "createdAt", "updatedAt"]);
