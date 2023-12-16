"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolScalarFieldEnumSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.PoolScalarFieldEnumSchema = joi_1.default.string().valid(...["id", "customerId", "address", "price", "chemicalIncluded", "type", "inService", "serviceDayId", "createdAt", "updatedAt"]);
