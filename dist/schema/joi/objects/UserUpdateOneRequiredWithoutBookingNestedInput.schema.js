"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateOneRequiredWithoutBookingNestedInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const UserCreateWithoutBookingInput_schema_1 = require("./UserCreateWithoutBookingInput.schema");
const UserUncheckedCreateWithoutBookingInput_schema_1 = require("./UserUncheckedCreateWithoutBookingInput.schema");
const UserCreateOrConnectWithoutBookingInput_schema_1 = require("./UserCreateOrConnectWithoutBookingInput.schema");
const UserUpsertWithoutBookingInput_schema_1 = require("./UserUpsertWithoutBookingInput.schema");
const UserWhereUniqueInput_schema_1 = require("./UserWhereUniqueInput.schema");
const UserUpdateWithoutBookingInput_schema_1 = require("./UserUpdateWithoutBookingInput.schema");
const UserUncheckedUpdateWithoutBookingInput_schema_1 = require("./UserUncheckedUpdateWithoutBookingInput.schema");
exports.UserUpdateOneRequiredWithoutBookingNestedInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(UserCreateWithoutBookingInput_schema_1.UserCreateWithoutBookingInputSchemaObject), joi_1.default.object().keys(UserUncheckedCreateWithoutBookingInput_schema_1.UserUncheckedCreateWithoutBookingInputSchemaObject)),
    connectOrCreate: joi_1.default.object().keys(UserCreateOrConnectWithoutBookingInput_schema_1.UserCreateOrConnectWithoutBookingInputSchemaObject),
    upsert: joi_1.default.object().keys(UserUpsertWithoutBookingInput_schema_1.UserUpsertWithoutBookingInputSchemaObject),
    connect: joi_1.default.object().keys(UserWhereUniqueInput_schema_1.UserWhereUniqueInputSchemaObject),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(UserUpdateWithoutBookingInput_schema_1.UserUpdateWithoutBookingInputSchemaObject), joi_1.default.object().keys(UserUncheckedUpdateWithoutBookingInput_schema_1.UserUncheckedUpdateWithoutBookingInputSchemaObject))
};
