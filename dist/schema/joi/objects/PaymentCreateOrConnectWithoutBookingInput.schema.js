"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentCreateOrConnectWithoutBookingInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PaymentWhereUniqueInput_schema_1 = require("./PaymentWhereUniqueInput.schema");
const PaymentCreateWithoutBookingInput_schema_1 = require("./PaymentCreateWithoutBookingInput.schema");
const PaymentUncheckedCreateWithoutBookingInput_schema_1 = require("./PaymentUncheckedCreateWithoutBookingInput.schema");
exports.PaymentCreateOrConnectWithoutBookingInputSchemaObject = {
    where: joi_1.default.object().keys(PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputSchemaObject),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(PaymentCreateWithoutBookingInput_schema_1.PaymentCreateWithoutBookingInputSchemaObject), joi_1.default.object().keys(PaymentUncheckedCreateWithoutBookingInput_schema_1.PaymentUncheckedCreateWithoutBookingInputSchemaObject))
};
