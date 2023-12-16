"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingUpdateManyWithWhereWithoutRoomInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const BookingScalarWhereInput_schema_1 = require("./BookingScalarWhereInput.schema");
const BookingUpdateManyMutationInput_schema_1 = require("./BookingUpdateManyMutationInput.schema");
const BookingUncheckedUpdateManyWithoutBookingInput_schema_1 = require("./BookingUncheckedUpdateManyWithoutBookingInput.schema");
exports.BookingUpdateManyWithWhereWithoutRoomInputSchemaObject = {
    where: joi_1.default.object().keys(BookingScalarWhereInput_schema_1.BookingScalarWhereInputSchemaObject),
    data: joi_1.default.alternatives().try(joi_1.default.object().keys(BookingUpdateManyMutationInput_schema_1.BookingUpdateManyMutationInputSchemaObject), joi_1.default.object().keys(BookingUncheckedUpdateManyWithoutBookingInput_schema_1.BookingUncheckedUpdateManyWithoutBookingInputSchemaObject))
};
