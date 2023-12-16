"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomUpdateOneRequiredWithoutBookingNestedInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const RoomCreateWithoutBookingInput_schema_1 = require("./RoomCreateWithoutBookingInput.schema");
const RoomUncheckedCreateWithoutBookingInput_schema_1 = require("./RoomUncheckedCreateWithoutBookingInput.schema");
const RoomCreateOrConnectWithoutBookingInput_schema_1 = require("./RoomCreateOrConnectWithoutBookingInput.schema");
const RoomUpsertWithoutBookingInput_schema_1 = require("./RoomUpsertWithoutBookingInput.schema");
const RoomWhereUniqueInput_schema_1 = require("./RoomWhereUniqueInput.schema");
const RoomUpdateWithoutBookingInput_schema_1 = require("./RoomUpdateWithoutBookingInput.schema");
const RoomUncheckedUpdateWithoutBookingInput_schema_1 = require("./RoomUncheckedUpdateWithoutBookingInput.schema");
exports.RoomUpdateOneRequiredWithoutBookingNestedInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(RoomCreateWithoutBookingInput_schema_1.RoomCreateWithoutBookingInputSchemaObject), joi_1.default.object().keys(RoomUncheckedCreateWithoutBookingInput_schema_1.RoomUncheckedCreateWithoutBookingInputSchemaObject)),
    connectOrCreate: joi_1.default.object().keys(RoomCreateOrConnectWithoutBookingInput_schema_1.RoomCreateOrConnectWithoutBookingInputSchemaObject),
    upsert: joi_1.default.object().keys(RoomUpsertWithoutBookingInput_schema_1.RoomUpsertWithoutBookingInputSchemaObject),
    connect: joi_1.default.object().keys(RoomWhereUniqueInput_schema_1.RoomWhereUniqueInputSchemaObject),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(RoomUpdateWithoutBookingInput_schema_1.RoomUpdateWithoutBookingInputSchemaObject), joi_1.default.object().keys(RoomUncheckedUpdateWithoutBookingInput_schema_1.RoomUncheckedUpdateWithoutBookingInputSchemaObject))
};
