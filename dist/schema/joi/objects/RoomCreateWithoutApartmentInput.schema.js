"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomCreateWithoutApartmentInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const BookingCreateNestedManyWithoutRoomInput_schema_1 = require("./BookingCreateNestedManyWithoutRoomInput.schema");
exports.RoomCreateWithoutApartmentInputSchemaObject = {
    no: joi_1.default.number().required(),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date(),
    booking: joi_1.default.object().keys(BookingCreateNestedManyWithoutRoomInput_schema_1.BookingCreateNestedManyWithoutRoomInputSchemaObject)
};
