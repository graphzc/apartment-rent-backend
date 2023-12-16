"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomUpdateManyWithWhereWithoutApartmentInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const RoomScalarWhereInput_schema_1 = require("./RoomScalarWhereInput.schema");
const RoomUpdateManyMutationInput_schema_1 = require("./RoomUpdateManyMutationInput.schema");
const RoomUncheckedUpdateManyWithoutRoomInput_schema_1 = require("./RoomUncheckedUpdateManyWithoutRoomInput.schema");
exports.RoomUpdateManyWithWhereWithoutApartmentInputSchemaObject = {
    where: joi_1.default.object().keys(RoomScalarWhereInput_schema_1.RoomScalarWhereInputSchemaObject),
    data: joi_1.default.alternatives().try(joi_1.default.object().keys(RoomUpdateManyMutationInput_schema_1.RoomUpdateManyMutationInputSchemaObject), joi_1.default.object().keys(RoomUncheckedUpdateManyWithoutRoomInput_schema_1.RoomUncheckedUpdateManyWithoutRoomInputSchemaObject))
};
