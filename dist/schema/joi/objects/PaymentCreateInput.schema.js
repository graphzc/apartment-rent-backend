"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentCreateInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const BookingCreateNestedOneWithoutPaymentInput_schema_1 = require("./BookingCreateNestedOneWithoutPaymentInput.schema");
exports.PaymentCreateInputSchemaObject = {
    amount: joi_1.default.number().required(),
    slip: joi_1.default.alternatives().try(joi_1.default.string()),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date(),
    booking: joi_1.default.object().keys(BookingCreateNestedOneWithoutPaymentInput_schema_1.BookingCreateNestedOneWithoutPaymentInputSchemaObject)
};
