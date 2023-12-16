"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingUpdateManyWithoutUserNestedInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const BookingCreateWithoutUserInput_schema_1 = require("./BookingCreateWithoutUserInput.schema");
const BookingUncheckedCreateWithoutUserInput_schema_1 = require("./BookingUncheckedCreateWithoutUserInput.schema");
const BookingCreateOrConnectWithoutUserInput_schema_1 = require("./BookingCreateOrConnectWithoutUserInput.schema");
const BookingUpsertWithWhereUniqueWithoutUserInput_schema_1 = require("./BookingUpsertWithWhereUniqueWithoutUserInput.schema");
const BookingCreateManyUserInputEnvelope_schema_1 = require("./BookingCreateManyUserInputEnvelope.schema");
const BookingWhereUniqueInput_schema_1 = require("./BookingWhereUniqueInput.schema");
const BookingUpdateWithWhereUniqueWithoutUserInput_schema_1 = require("./BookingUpdateWithWhereUniqueWithoutUserInput.schema");
const BookingUpdateManyWithWhereWithoutUserInput_schema_1 = require("./BookingUpdateManyWithWhereWithoutUserInput.schema");
const BookingScalarWhereInput_schema_1 = require("./BookingScalarWhereInput.schema");
exports.BookingUpdateManyWithoutUserNestedInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingCreateWithoutUserInput_schema_1.BookingCreateWithoutUserInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingCreateWithoutUserInput_schema_1.BookingCreateWithoutUserInputSchemaObject)), joi_1.default.object().keys(BookingUncheckedCreateWithoutUserInput_schema_1.BookingUncheckedCreateWithoutUserInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingUncheckedCreateWithoutUserInput_schema_1.BookingUncheckedCreateWithoutUserInputSchemaObject))),
    connectOrCreate: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingCreateOrConnectWithoutUserInput_schema_1.BookingCreateOrConnectWithoutUserInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingCreateOrConnectWithoutUserInput_schema_1.BookingCreateOrConnectWithoutUserInputSchemaObject))),
    upsert: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingUpsertWithWhereUniqueWithoutUserInput_schema_1.BookingUpsertWithWhereUniqueWithoutUserInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingUpsertWithWhereUniqueWithoutUserInput_schema_1.BookingUpsertWithWhereUniqueWithoutUserInputSchemaObject))),
    createMany: joi_1.default.object().keys(BookingCreateManyUserInputEnvelope_schema_1.BookingCreateManyUserInputEnvelopeSchemaObject),
    set: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject))),
    disconnect: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject))),
    delete: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject))),
    connect: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject))),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingUpdateWithWhereUniqueWithoutUserInput_schema_1.BookingUpdateWithWhereUniqueWithoutUserInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingUpdateWithWhereUniqueWithoutUserInput_schema_1.BookingUpdateWithWhereUniqueWithoutUserInputSchemaObject))),
    updateMany: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingUpdateManyWithWhereWithoutUserInput_schema_1.BookingUpdateManyWithWhereWithoutUserInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingUpdateManyWithWhereWithoutUserInput_schema_1.BookingUpdateManyWithWhereWithoutUserInputSchemaObject))),
    deleteMany: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingScalarWhereInput_schema_1.BookingScalarWhereInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingScalarWhereInput_schema_1.BookingScalarWhereInputSchemaObject)))
};
