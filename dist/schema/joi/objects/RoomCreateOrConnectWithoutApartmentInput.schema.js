"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomCreateOrConnectWithoutApartmentInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const RoomWhereUniqueInput_schema_1 = require("./RoomWhereUniqueInput.schema");
const RoomCreateWithoutApartmentInput_schema_1 = require("./RoomCreateWithoutApartmentInput.schema");
const RoomUncheckedCreateWithoutApartmentInput_schema_1 = require("./RoomUncheckedCreateWithoutApartmentInput.schema");
exports.RoomCreateOrConnectWithoutApartmentInputSchemaObject = {
    where: joi_1.default.object().keys(RoomWhereUniqueInput_schema_1.RoomWhereUniqueInputSchemaObject),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(RoomCreateWithoutApartmentInput_schema_1.RoomCreateWithoutApartmentInputSchemaObject), joi_1.default.object().keys(RoomUncheckedCreateWithoutApartmentInput_schema_1.RoomUncheckedCreateWithoutApartmentInputSchemaObject))
};
