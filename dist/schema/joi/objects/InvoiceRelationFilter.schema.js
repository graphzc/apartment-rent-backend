"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceRelationFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const InvoiceWhereInput_schema_1 = require("./InvoiceWhereInput.schema");
exports.InvoiceRelationFilterSchemaObject = {
    is: joi_1.default.alternatives().try(joi_1.default.object().keys(InvoiceWhereInput_schema_1.InvoiceWhereInputSchemaObject)),
    isNot: joi_1.default.alternatives().try(joi_1.default.object().keys(InvoiceWhereInput_schema_1.InvoiceWhereInputSchemaObject))
};
