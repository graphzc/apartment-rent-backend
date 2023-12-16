"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentCreateNestedManyWithoutBookingInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PaymentCreateWithoutBookingInput_schema_1 = require("./PaymentCreateWithoutBookingInput.schema");
const PaymentUncheckedCreateWithoutBookingInput_schema_1 = require("./PaymentUncheckedCreateWithoutBookingInput.schema");
const PaymentCreateOrConnectWithoutBookingInput_schema_1 = require("./PaymentCreateOrConnectWithoutBookingInput.schema");
const PaymentCreateManyBookingInputEnvelope_schema_1 = require("./PaymentCreateManyBookingInputEnvelope.schema");
const PaymentWhereUniqueInput_schema_1 = require("./PaymentWhereUniqueInput.schema");
exports.PaymentCreateNestedManyWithoutBookingInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(PaymentCreateWithoutBookingInput_schema_1.PaymentCreateWithoutBookingInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PaymentCreateWithoutBookingInput_schema_1.PaymentCreateWithoutBookingInputSchemaObject)), joi_1.default.object().keys(PaymentUncheckedCreateWithoutBookingInput_schema_1.PaymentUncheckedCreateWithoutBookingInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PaymentUncheckedCreateWithoutBookingInput_schema_1.PaymentUncheckedCreateWithoutBookingInputSchemaObject))),
    connectOrCreate: joi_1.default.alternatives().try(joi_1.default.object().keys(PaymentCreateOrConnectWithoutBookingInput_schema_1.PaymentCreateOrConnectWithoutBookingInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PaymentCreateOrConnectWithoutBookingInput_schema_1.PaymentCreateOrConnectWithoutBookingInputSchemaObject))),
    createMany: joi_1.default.object().keys(PaymentCreateManyBookingInputEnvelope_schema_1.PaymentCreateManyBookingInputEnvelopeSchemaObject),
    connect: joi_1.default.alternatives().try(joi_1.default.object().keys(PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputSchemaObject)))
};
