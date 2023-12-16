"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolListRelationFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PoolWhereInput_schema_1 = require("./PoolWhereInput.schema");
exports.PoolListRelationFilterSchemaObject = {
    every: joi_1.default.object().keys(PoolWhereInput_schema_1.PoolWhereInputSchemaObject),
    some: joi_1.default.object().keys(PoolWhereInput_schema_1.PoolWhereInputSchemaObject),
    none: joi_1.default.object().keys(PoolWhereInput_schema_1.PoolWhereInputSchemaObject)
};
