"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRelationFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const ProductWhereInput_schema_1 = require("./ProductWhereInput.schema");
exports.ProductRelationFilterSchemaObject = {
    is: joi_1.default.alternatives().try(joi_1.default.object().keys(ProductWhereInput_schema_1.ProductWhereInputSchemaObject)),
    isNot: joi_1.default.alternatives().try(joi_1.default.object().keys(ProductWhereInput_schema_1.ProductWhereInputSchemaObject))
};
