"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentUpdateManyWithoutBookingNestedInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PaymentCreateWithoutBookingInput_schema_1 = require("./PaymentCreateWithoutBookingInput.schema");
const PaymentUncheckedCreateWithoutBookingInput_schema_1 = require("./PaymentUncheckedCreateWithoutBookingInput.schema");
const PaymentCreateOrConnectWithoutBookingInput_schema_1 = require("./PaymentCreateOrConnectWithoutBookingInput.schema");
const PaymentUpsertWithWhereUniqueWithoutBookingInput_schema_1 = require("./PaymentUpsertWithWhereUniqueWithoutBookingInput.schema");
const PaymentCreateManyBookingInputEnvelope_schema_1 = require("./PaymentCreateManyBookingInputEnvelope.schema");
const PaymentWhereUniqueInput_schema_1 = require("./PaymentWhereUniqueInput.schema");
const PaymentUpdateWithWhereUniqueWithoutBookingInput_schema_1 = require("./PaymentUpdateWithWhereUniqueWithoutBookingInput.schema");
const PaymentUpdateManyWithWhereWithoutBookingInput_schema_1 = require("./PaymentUpdateManyWithWhereWithoutBookingInput.schema");
const PaymentScalarWhereInput_schema_1 = require("./PaymentScalarWhereInput.schema");
exports.PaymentUpdateManyWithoutBookingNestedInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(PaymentCreateWithoutBookingInput_schema_1.PaymentCreateWithoutBookingInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PaymentCreateWithoutBookingInput_schema_1.PaymentCreateWithoutBookingInputSchemaObject)), joi_1.default.object().keys(PaymentUncheckedCreateWithoutBookingInput_schema_1.PaymentUncheckedCreateWithoutBookingInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PaymentUncheckedCreateWithoutBookingInput_schema_1.PaymentUncheckedCreateWithoutBookingInputSchemaObject))),
    connectOrCreate: joi_1.default.alternatives().try(joi_1.default.object().keys(PaymentCreateOrConnectWithoutBookingInput_schema_1.PaymentCreateOrConnectWithoutBookingInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PaymentCreateOrConnectWithoutBookingInput_schema_1.PaymentCreateOrConnectWithoutBookingInputSchemaObject))),
    upsert: joi_1.default.alternatives().try(joi_1.default.object().keys(PaymentUpsertWithWhereUniqueWithoutBookingInput_schema_1.PaymentUpsertWithWhereUniqueWithoutBookingInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PaymentUpsertWithWhereUniqueWithoutBookingInput_schema_1.PaymentUpsertWithWhereUniqueWithoutBookingInputSchemaObject))),
    createMany: joi_1.default.object().keys(PaymentCreateManyBookingInputEnvelope_schema_1.PaymentCreateManyBookingInputEnvelopeSchemaObject),
    set: joi_1.default.alternatives().try(joi_1.default.object().keys(PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputSchemaObject))),
    disconnect: joi_1.default.alternatives().try(joi_1.default.object().keys(PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputSchemaObject))),
    delete: joi_1.default.alternatives().try(joi_1.default.object().keys(PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputSchemaObject))),
    connect: joi_1.default.alternatives().try(joi_1.default.object().keys(PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PaymentWhereUniqueInput_schema_1.PaymentWhereUniqueInputSchemaObject))),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(PaymentUpdateWithWhereUniqueWithoutBookingInput_schema_1.PaymentUpdateWithWhereUniqueWithoutBookingInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PaymentUpdateWithWhereUniqueWithoutBookingInput_schema_1.PaymentUpdateWithWhereUniqueWithoutBookingInputSchemaObject))),
    updateMany: joi_1.default.alternatives().try(joi_1.default.object().keys(PaymentUpdateManyWithWhereWithoutBookingInput_schema_1.PaymentUpdateManyWithWhereWithoutBookingInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PaymentUpdateManyWithWhereWithoutBookingInput_schema_1.PaymentUpdateManyWithWhereWithoutBookingInputSchemaObject))),
    deleteMany: joi_1.default.alternatives().try(joi_1.default.object().keys(PaymentScalarWhereInput_schema_1.PaymentScalarWhereInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PaymentScalarWhereInput_schema_1.PaymentScalarWhereInputSchemaObject)))
};
