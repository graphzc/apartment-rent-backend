"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApartmentUncheckedCreateInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const RoomUncheckedCreateNestedManyWithoutApartmentInput_schema_1 = require("./RoomUncheckedCreateNestedManyWithoutApartmentInput.schema");
exports.ApartmentUncheckedCreateInputSchemaObject = {
    id: joi_1.default.number(),
    name: joi_1.default.string().required(),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date(),
    room: joi_1.default.object().keys(RoomUncheckedCreateNestedManyWithoutApartmentInput_schema_1.RoomUncheckedCreateNestedManyWithoutApartmentInputSchemaObject)
};
