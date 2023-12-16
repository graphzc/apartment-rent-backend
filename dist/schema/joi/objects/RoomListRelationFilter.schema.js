"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomListRelationFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const RoomWhereInput_schema_1 = require("./RoomWhereInput.schema");
exports.RoomListRelationFilterSchemaObject = {
    every: joi_1.default.object().keys(RoomWhereInput_schema_1.RoomWhereInputSchemaObject),
    some: joi_1.default.object().keys(RoomWhereInput_schema_1.RoomWhereInputSchemaObject),
    none: joi_1.default.object().keys(RoomWhereInput_schema_1.RoomWhereInputSchemaObject)
};
