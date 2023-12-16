"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceCreateWithoutCustomerOrderInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.InvoiceCreateWithoutCustomerOrderInputSchemaObject = {
    id: joi_1.default.string(),
    vatIncluded: joi_1.default.boolean(),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date()
};
