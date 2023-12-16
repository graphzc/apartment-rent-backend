"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingCreateWithoutRoomInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const UserCreateNestedOneWithoutBookingInput_schema_1 = require("./UserCreateNestedOneWithoutBookingInput.schema");
const PaymentCreateNestedManyWithoutBookingInput_schema_1 = require("./PaymentCreateNestedManyWithoutBookingInput.schema");
exports.BookingCreateWithoutRoomInputSchemaObject = {
    startDate: joi_1.default.date().required(),
    endDate: joi_1.default.date().required(),
    duration: joi_1.default.number().required(),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date(),
    user: joi_1.default.object().keys(UserCreateNestedOneWithoutBookingInput_schema_1.UserCreateNestedOneWithoutBookingInputSchemaObject),
    payment: joi_1.default.object().keys(PaymentCreateNestedManyWithoutBookingInput_schema_1.PaymentCreateNestedManyWithoutBookingInputSchemaObject)
};
