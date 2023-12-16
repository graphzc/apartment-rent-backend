"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApartmentUpsertWithoutRoomInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const ApartmentUpdateWithoutRoomInput_schema_1 = require("./ApartmentUpdateWithoutRoomInput.schema");
const ApartmentUncheckedUpdateWithoutRoomInput_schema_1 = require("./ApartmentUncheckedUpdateWithoutRoomInput.schema");
const ApartmentCreateWithoutRoomInput_schema_1 = require("./ApartmentCreateWithoutRoomInput.schema");
const ApartmentUncheckedCreateWithoutRoomInput_schema_1 = require("./ApartmentUncheckedCreateWithoutRoomInput.schema");
exports.ApartmentUpsertWithoutRoomInputSchemaObject = {
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(ApartmentUpdateWithoutRoomInput_schema_1.ApartmentUpdateWithoutRoomInputSchemaObject), joi_1.default.object().keys(ApartmentUncheckedUpdateWithoutRoomInput_schema_1.ApartmentUncheckedUpdateWithoutRoomInputSchemaObject)),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(ApartmentCreateWithoutRoomInput_schema_1.ApartmentCreateWithoutRoomInputSchemaObject), joi_1.default.object().keys(ApartmentUncheckedCreateWithoutRoomInput_schema_1.ApartmentUncheckedCreateWithoutRoomInputSchemaObject))
};
