"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUpdateWithWhereUniqueWithoutBookingInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PaymentWhereUniqueInput_schema_1 = require("./PaymentWhereUniqueInput.schema");
const PaymentUpdateWithoutBookingInput_schema_1 = require("./PaymentUpdateWithoutBookingInput.schema");
const PaymentUncheckedUpdateWithoutBookingInput_schema_1 = require("./PaymentUncheckedUpdateWithoutBookingInput.schema");
exports.PaymentUpdateWithWhereUniqueWithoutBookingInputSchemaObject = {
    where: joi_1.default.object().keys(PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputSchemaObject),
    data: joi_1.default.alternatives().try(joi_1.default.object().keys(PaymentUpdateWithoutBookingInput_schema_1.PaymentUpdateWithoutBookingInputSchemaObject), joi_1.default.object().keys(PaymentUncheckedUpdateWithoutBookingInput_schema_1.PaymentUncheckedUpdateWithoutBookingInputSchemaObject))
};
