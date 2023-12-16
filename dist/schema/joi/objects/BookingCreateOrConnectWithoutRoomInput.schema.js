"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingCreateOrConnectWithoutRoomInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const BookingWhereUniqueInput_schema_1 = require("./BookingWhereUniqueInput.schema");
const BookingCreateWithoutRoomInput_schema_1 = require("./BookingCreateWithoutRoomInput.schema");
const BookingUncheckedCreateWithoutRoomInput_schema_1 = require("./BookingUncheckedCreateWithoutRoomInput.schema");
exports.BookingCreateOrConnectWithoutRoomInputSchemaObject = {
    where: joi_1.default.object().keys(BookingWhereUniqueInput_schema_1.BookingWhereUniqueInputSchemaObject),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingCreateWithoutRoomInput_schema_1.BookingCreateWithoutRoomInputSchemaObject), joi_1.default.object().keys(BookingUncheckedCreateWithoutRoomInput_schema_1.BookingUncheckedCreateWithoutRoomInputSchemaObject))
};
