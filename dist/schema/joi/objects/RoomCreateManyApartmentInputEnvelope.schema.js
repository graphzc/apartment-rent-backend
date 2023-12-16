"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomCreateManyApartmentInputEnvelopeSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const RoomCreateManyApartmentInput_schema_1 = require("./RoomCreateManyApartmentInput.schema");
exports.RoomCreateManyApartmentInputEnvelopeSchemaObject = {
    data: joi_1.default.alternatives().try(joi_1.default.object().keys(RoomCreateManyApartmentInput_schema_1.RoomCreateManyApartmentInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(RoomCreateManyApartmentInput_schema_1.RoomCreateManyApartmentInputSchemaObject))),
    skipDuplicates: joi_1.default.boolean()
};
