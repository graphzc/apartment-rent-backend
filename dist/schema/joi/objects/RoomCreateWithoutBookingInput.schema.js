"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomCreateWithoutBookingInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const ApartmentCreateNestedOneWithoutRoomInput_schema_1 = require("./ApartmentCreateNestedOneWithoutRoomInput.schema");
exports.RoomCreateWithoutBookingInputSchemaObject = {
    no: joi_1.default.number().required(),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date(),
    apartment: joi_1.default.object().keys(ApartmentCreateNestedOneWithoutRoomInput_schema_1.ApartmentCreateNestedOneWithoutRoomInputSchemaObject)
};
