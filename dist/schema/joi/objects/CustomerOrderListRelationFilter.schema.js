"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderListRelationFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerOrderWhereInput_schema_1 = require("./CustomerOrderWhereInput.schema");
exports.CustomerOrderListRelationFilterSchemaObject = {
    every: joi_1.default.object().keys(CustomerOrderWhereInput_schema_1.CustomerOrderWhereInputSchemaObject),
    some: joi_1.default.object().keys(CustomerOrderWhereInput_schema_1.CustomerOrderWhereInputSchemaObject),
    none: joi_1.default.object().keys(CustomerOrderWhereInput_schema_1.CustomerOrderWhereInputSchemaObject)
};
