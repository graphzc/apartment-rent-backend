"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateWithoutPurchaseInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.ProductCreateWithoutPurchaseInputSchemaObject = {
    id: joi_1.default.string(),
    code: joi_1.default.alternatives().try(joi_1.default.string()),
    name: joi_1.default.string().required(),
    description: joi_1.default.alternatives().try(joi_1.default.string()),
    price: joi_1.default.number().required(),
    unit: joi_1.default.string().required(),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date()
};
