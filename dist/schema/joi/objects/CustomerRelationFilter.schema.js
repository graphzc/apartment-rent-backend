"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRelationFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerWhereInput_schema_1 = require("./CustomerWhereInput.schema");
exports.CustomerRelationFilterSchemaObject = {
    is: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerWhereInput_schema_1.CustomerWhereInputSchemaObject)),
    isNot: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerWhereInput_schema_1.CustomerWhereInputSchemaObject))
};
