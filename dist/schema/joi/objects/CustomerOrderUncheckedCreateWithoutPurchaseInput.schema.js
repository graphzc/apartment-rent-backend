"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderUncheckedCreateWithoutPurchaseInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.CustomerOrderUncheckedCreateWithoutPurchaseInputSchemaObject = {
    id: joi_1.default.string(),
    customerId: joi_1.default.string().required(),
    employeeId: joi_1.default.string().required(),
    invoiceId: joi_1.default.string().required(),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date()
};
