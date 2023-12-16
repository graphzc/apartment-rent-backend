"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingUncheckedUpdateManyWithoutRoomNestedInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const BookingCreateWithoutRoomInput_schema_1 = require("./BookingCreateWithoutRoomInput.schema");
const BookingUncheckedCreateWithoutRoomInput_schema_1 = require("./BookingUncheckedCreateWithoutRoomInput.schema");
const BookingCreateOrConnectWithoutRoomInput_schema_1 = require("./BookingCreateOrConnectWithoutRoomInput.schema");
const BookingUpsertWithWhereUniqueWithoutRoomInput_schema_1 = require("./BookingUpsertWithWhereUniqueWithoutRoomInput.schema");
const BookingCreateManyRoomInputEnvelope_schema_1 = require("./BookingCreateManyRoomInputEnvelope.schema");
const BookingWhereUniqueInput_schema_1 = require("./BookingWhereUniqueInput.schema");
const BookingUpdateWithWhereUniqueWithoutRoomInput_schema_1 = require("./BookingUpdateWithWhereUniqueWithoutRoomInput.schema");
const BookingUpdateManyWithWhereWithoutRoomInput_schema_1 = require("./BookingUpdateManyWithWhereWithoutRoomInput.schema");
const BookingScalarWhereInput_schema_1 = require("./BookingScalarWhereInput.schema");
exports.BookingUncheckedUpdateManyWithoutRoomNestedInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingCreateWithoutRoomInput_schema_1.BookingCreateWithoutRoomInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingCreateWithoutRoomInput_schema_1.BookingCreateWithoutRoomInputSchemaObject)), joi_1.default.object().keys(BookingUncheckedCreateWithoutRoomInput_schema_1.BookingUncheckedCreateWithoutRoomInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingUncheckedCreateWithoutRoomInput_schema_1.BookingUncheckedCreateWithoutRoomInputSchemaObject))),
    connectOrCreate: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingCreateOrConnectWithoutRoomInput_schema_1.BookingCreateOrConnectWithoutRoomInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingCreateOrConnectWithoutRoomInput_schema_1.BookingCreateOrConnectWithoutRoomInputSchemaObject))),
    upsert: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingUpsertWithWhereUniqueWithoutRoomInput_schema_1.BookingUpsertWithWhereUniqueWithoutRoomInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingUpsertWithWhereUniqueWithoutRoomInput_schema_1.BookingUpsertWithWhereUniqueWithoutRoomInputSchemaObject))),
    createMany: joi_1.default.object().keys(BookingCreateManyRoomInputEnvelope_schema_1.BookingCreateManyRoomInputEnvelopeSchemaObject),
    set: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject))),
    disconnect: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject))),
    delete: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject))),
    connect: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject))),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingUpdateWithWhereUniqueWithoutRoomInput_schema_1.BookingUpdateWithWhereUniqueWithoutRoomInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingUpdateWithWhereUniqueWithoutRoomInput_schema_1.BookingUpdateWithWhereUniqueWithoutRoomInputSchemaObject))),
    updateMany: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingUpdateManyWithWhereWithoutRoomInput_schema_1.BookingUpdateManyWithWhereWithoutRoomInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingUpdateManyWithWhereWithoutRoomInput_schema_1.BookingUpdateManyWithWhereWithoutRoomInputSchemaObject))),
    deleteMany: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingScalarWhereInput_schema_1.BookingScalarWhereInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(BookingScalarWhereInput_schema_1.BookingScalarWhereInputSchemaObject)))
};
