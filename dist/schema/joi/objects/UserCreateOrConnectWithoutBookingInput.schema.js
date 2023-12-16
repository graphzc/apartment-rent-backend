"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateOrConnectWithoutBookingInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const UserWhereUniqueInput_schema_1 = require("./UserWhereUniqueInput.schema");
const UserCreateWithoutBookingInput_schema_1 = require("./UserCreateWithoutBookingInput.schema");
const UserUncheckedCreateWithoutBookingInput_schema_1 = require("./UserUncheckedCreateWithoutBookingInput.schema");
exports.UserCreateOrConnectWithoutBookingInputSchemaObject = {
    where: joi_1.default.object().keys(UserWhereUniqueInput_schema_1.UserWhereUniqueInputSchemaObject),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(UserCreateWithoutBookingInput_schema_1.UserCreateWithoutBookingInputSchemaObject), joi_1.default.object().keys(UserUncheckedCreateWithoutBookingInput_schema_1.UserUncheckedCreateWithoutBookingInputSchemaObject))
};
