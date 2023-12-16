"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingUpsertWithWhereUniqueWithoutRoomInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const BookingWhereUniqueInput_schema_1 = require("./BookingWhereUniqueInput.schema");
const BookingUpdateWithoutRoomInput_schema_1 = require("./BookingUpdateWithoutRoomInput.schema");
const BookingUncheckedUpdateWithoutRoomInput_schema_1 = require("./BookingUncheckedUpdateWithoutRoomInput.schema");
const BookingCreateWithoutRoomInput_schema_1 = require("./BookingCreateWithoutRoomInput.schema");
const BookingUncheckedCreateWithoutRoomInput_schema_1 = require("./BookingUncheckedCreateWithoutRoomInput.schema");
exports.BookingUpsertWithWhereUniqueWithoutRoomInputSchemaObject = {
    where: joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingUpdateWithoutRoomInput_schema_1.BookingUpdateWithoutRoomInputSchemaObject), joi_1.default.object().keys(BookingUncheckedUpdateWithoutRoomInput_schema_1.BookingUncheckedUpdateWithoutRoomInputSchemaObject)),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingCreateWithoutRoomInput_schema_1.BookingCreateWithoutRoomInputSchemaObject), joi_1.default.object().keys(BookingUncheckedCreateWithoutRoomInput_schema_1.BookingUncheckedCreateWithoutRoomInputSchemaObject))
};
