"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomUpdateWithWhereUniqueWithoutApartmentInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const RoomWhereUniqueInput_schema_1 = require("./RoomWhereUniqueInput.schema");
const RoomUpdateWithoutApartmentInput_schema_1 = require("./RoomUpdateWithoutApartmentInput.schema");
const RoomUncheckedUpdateWithoutApartmentInput_schema_1 = require("./RoomUncheckedUpdateWithoutApartmentInput.schema");
exports.RoomUpdateWithWhereUniqueWithoutApartmentInputSchemaObject = {
    where: joi_1.default.object().keys(RoomWhereUniqueInput_schema_1.RoomWhereUniqueInputSchemaObject),
    data: joi_1.default.alternatives().try(joi_1.default.object().keys(RoomUpdateWithoutApartmentInput_schema_1.RoomUpdateWithoutApartmentInputSchemaObject), joi_1.default.object().keys(RoomUncheckedUpdateWithoutApartmentInput_schema_1.RoomUncheckedUpdateWithoutApartmentInputSchemaObject))
};
