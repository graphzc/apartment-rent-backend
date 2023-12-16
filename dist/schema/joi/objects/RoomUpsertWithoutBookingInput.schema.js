"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomUpsertWithoutBookingInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const RoomUpdateWithoutBookingInput_schema_1 = require("./RoomUpdateWithoutBookingInput.schema");
const RoomUncheckedUpdateWithoutBookingInput_schema_1 = require("./RoomUncheckedUpdateWithoutBookingInput.schema");
const RoomCreateWithoutBookingInput_schema_1 = require("./RoomCreateWithoutBookingInput.schema");
const RoomUncheckedCreateWithoutBookingInput_schema_1 = require("./RoomUncheckedCreateWithoutBookingInput.schema");
exports.RoomUpsertWithoutBookingInputSchemaObject = {
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(RoomUpdateWithoutBookingInput_schema_1.RoomUpdateWithoutBookingInputSchemaObject), joi_1.default.object().keys(RoomUncheckedUpdateWithoutBookingInput_schema_1.RoomUncheckedUpdateWithoutBookingInputSchemaObject)),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(RoomCreateWithoutBookingInput_schema_1.RoomCreateWithoutBookingInputSchemaObject), joi_1.default.object().keys(RoomUncheckedCreateWithoutBookingInput_schema_1.RoomUncheckedCreateWithoutBookingInputSchemaObject))
};
