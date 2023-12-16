"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUncheckedCreateWithoutBookingInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
exports.PaymentUncheckedCreateWithoutBookingInputSchemaObject = {
    id: joi_1.default.number(),
    amount: joi_1.default.number().required(),
    slip: joi_1.default.alternatives().try(joi_1.default.string()),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date()
};
