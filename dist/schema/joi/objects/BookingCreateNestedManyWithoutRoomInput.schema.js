"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingCreateNestedManyWithoutRoomInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const BookingCreateWithoutRoomInput_schema_1 = require("./BookingCreateWithoutRoomInput.schema");
const BookingUncheckedCreateWithoutRoomInput_schema_1 = require("./BookingUncheckedCreateWithoutRoomInput.schema");
const BookingCreateOrConnectWithoutRoomInput_schema_1 = require("./BookingCreateOrConnectWithoutRoomInput.schema");
const BookingCreateManyRoomInputEnvelope_schema_1 = require("./BookingCreateManyRoomInputEnvelope.schema");
const BookingWhereUniqueInput_schema_1 = require("./BookingWhereUniqueInput.schema");
exports.BookingCreateNestedManyWithoutRoomInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingCreateWithoutRoomInput_schema_1.BookingCreateWithoutRoomInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingCreateWithoutRoomInput_schema_1.BookingCreateWithoutRoomInputSchemaObject)), joi_1.default.object().keys(BookingUncheckedCreateWithoutRoomInput_schema_1.BookingUncheckedCreateWithoutRoomInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingUncheckedCreateWithoutRoomInput_schema_1.BookingUncheckedCreateWithoutRoomInputSchemaObject))),
    connectOrCreate: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingCreateOrConnectWithoutRoomInput_schema_1.BookingCreateOrConnectWithoutRoomInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingCreateOrConnectWithoutRoomInput_schema_1.BookingCreateOrConnectWithoutRoomInputSchemaObject))),
    createMany: joi_1.default.object().keys(BookingCreateManyRoomInputEnvelope_schema_1.BookingCreateManyRoomInputEnvelopeSchemaObject),
    connect: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject)))
};
