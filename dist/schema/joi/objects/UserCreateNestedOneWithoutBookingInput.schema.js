"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateNestedOneWithoutBookingInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const UserCreateWithoutBookingInput_schema_1 = require("./UserCreateWithoutBookingInput.schema");
const UserUncheckedCreateWithoutBookingInput_schema_1 = require("./UserUncheckedCreateWithoutBookingInput.schema");
const UserCreateOrConnectWithoutBookingInput_schema_1 = require("./UserCreateOrConnectWithoutBookingInput.schema");
const UserWhereUniqueInput_schema_1 = require("./UserWhereUniqueInput.schema");
exports.UserCreateNestedOneWithoutBookingInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(UserCreateWithoutBookingInput_schema_1.UserCreateWithoutBookingInputSchemaObject), joi_1.default.object().keys(UserUncheckedCreateWithoutBookingInput_schema_1.UserUncheckedCreateWithoutBookingInputSchemaObject)),
    connectOrCreate: joi_1.default.object().keys(UserCreateOrConnectWithoutBookingInput_schema_1.UserCreateOrConnectWithoutBookingInputSchemaObject),
    connect: joi_1.default.object().keys(UserWhereUniqueInput_schema_1.UserWhereUniqueInputSchemaObject)
};
