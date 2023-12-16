"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomCreateNestedOneWithoutBookingInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const RoomCreateWithoutBookingInput_schema_1 = require("./RoomCreateWithoutBookingInput.schema");
const RoomUncheckedCreateWithoutBookingInput_schema_1 = require("./RoomUncheckedCreateWithoutBookingInput.schema");
const RoomCreateOrConnectWithoutBookingInput_schema_1 = require("./RoomCreateOrConnectWithoutBookingInput.schema");
const RoomWhereUniqueInput_schema_1 = require("./RoomWhereUniqueInput.schema");
exports.RoomCreateNestedOneWithoutBookingInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(RoomCreateWithoutBookingInput_schema_1.RoomCreateWithoutBookingInputSchemaObject), joi_1.default.object().keys(RoomUncheckedCreateWithoutBookingInput_schema_1.RoomUncheckedCreateWithoutBookingInputSchemaObject)),
    connectOrCreate: joi_1.default.object().keys(RoomCreateOrConnectWithoutBookingInput_schema_1.RoomCreateOrConnectWithoutBookingInputSchemaObject),
    connect: joi_1.default.object().keys(RoomWhereUniqueInput_schema_1.RoomWhereUniqueInputSchemaObject)
};
