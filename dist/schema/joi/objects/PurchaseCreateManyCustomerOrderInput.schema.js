"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseCreateManyCustomerOrderInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.PurchaseCreateManyCustomerOrderInputSchemaObject = {
    id: joi_1.default.string(),
    poolId: joi_1.default.alternatives().try(joi_1.default.string()),
    productId: joi_1.default.alternatives().try(joi_1.default.string()),
    quantity: joi_1.default.number().required(),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date()
};
