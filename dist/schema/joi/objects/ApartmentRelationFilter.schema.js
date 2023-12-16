"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApartmentRelationFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const ApartmentWhereInput_schema_1 = require("./ApartmentWhereInput.schema");
exports.ApartmentRelationFilterSchemaObject = {
    is: joi_1.default.alternatives().try(joi_1.default.object().keys(ApartmentWhereInput_schema_1.ApartmentWhereInputSchemaObject)),
    isNot: joi_1.default.alternatives().try(joi_1.default.object().keys(ApartmentWhereInput_schema_1.ApartmentWhereInputSchemaObject))
};
