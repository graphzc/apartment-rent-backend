"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingUncheckedCreateNestedManyWithoutUserInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const BookingCreateWithoutUserInput_schema_1 = require("./BookingCreateWithoutUserInput.schema");
const BookingUncheckedCreateWithoutUserInput_schema_1 = require("./BookingUncheckedCreateWithoutUserInput.schema");
const BookingCreateOrConnectWithoutUserInput_schema_1 = require("./BookingCreateOrConnectWithoutUserInput.schema");
const BookingCreateManyUserInputEnvelope_schema_1 = require("./BookingCreateManyUserInputEnvelope.schema");
const BookingWhereUniqueInput_schema_1 = require("./BookingWhereUniqueInput.schema");
exports.BookingUncheckedCreateNestedManyWithoutUserInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingCreateWithoutUserInput_schema_1.BookingCreateWithoutUserInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingCreateWithoutUserInput_schema_1.BookingCreateWithoutUserInputSchemaObject)), joi_1.default.object().keys(BookingUncheckedCreateWithoutUserInput_schema_1.BookingUncheckedCreateWithoutUserInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingUncheckedCreateWithoutUserInput_schema_1.BookingUncheckedCreateWithoutUserInputSchemaObject))),
    connectOrCreate: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingCreateOrConnectWithoutUserInput_schema_1.BookingCreateOrConnectWithoutUserInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingCreateOrConnectWithoutUserInput_schema_1.BookingCreateOrConnectWithoutUserInputSchemaObject))),
    createMany: joi_1.default.object().keys(BookingCreateManyUserInputEnvelope_schema_1.BookingCreateManyUserInputEnvelopeSchemaObject),
    connect: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject)))
};
