"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpsertWithoutBookingInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const UserUpdateWithoutBookingInput_schema_1 = require("./UserUpdateWithoutBookingInput.schema");
const UserUncheckedUpdateWithoutBookingInput_schema_1 = require("./UserUncheckedUpdateWithoutBookingInput.schema");
const UserCreateWithoutBookingInput_schema_1 = require("./UserCreateWithoutBookingInput.schema");
const UserUncheckedCreateWithoutBookingInput_schema_1 = require("./UserUncheckedCreateWithoutBookingInput.schema");
exports.UserUpsertWithoutBookingInputSchemaObject = {
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(UserUpdateWithoutBookingInput_schema_1.UserUpdateWithoutBookingInputSchemaObject), joi_1.default.object().keys(UserUncheckedUpdateWithoutBookingInput_schema_1.UserUncheckedUpdateWithoutBookingInputSchemaObject)),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(UserCreateWithoutBookingInput_schema_1.UserCreateWithoutBookingInputSchemaObject), joi_1.default.object().keys(UserUncheckedCreateWithoutBookingInput_schema_1.UserUncheckedCreateWithoutBookingInputSchemaObject))
};
