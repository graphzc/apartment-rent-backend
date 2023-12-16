"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUpdateManyWithWhereWithoutBookingInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PaymentScalarWhereInput_schema_1 = require("./PaymentScalarWhereInput.schema");
const PaymentUpdateManyMutationInput_schema_1 = require("./PaymentUpdateManyMutationInput.schema");
const PaymentUncheckedUpdateManyWithoutPaymentInput_schema_1 = require("./PaymentUncheckedUpdateManyWithoutPaymentInput.schema");
exports.PaymentUpdateManyWithWhereWithoutBookingInputSchemaObject = {
    where: joi_1.default.object().keys(PaymentScalarWhereInput_schema_1.PaymentScalarWhereInputSchemaObject),
    data: joi_1.default.alternatives().try(joi_1.default.object().keys(PaymentUpdateManyMutationInput_schema_1.PaymentUpdateManyMutationInputSchemaObject), joi_1.default.object().keys(PaymentUncheckedUpdateManyWithoutPaymentInput_schema_1.PaymentUncheckedUpdateManyWithoutPaymentInputSchemaObject))
};
