"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDayOrderByWithRelationInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const PoolOrderByWithRelationInput_schema_1 = require("./PoolOrderByWithRelationInput.schema");
exports.ServiceDayOrderByWithRelationInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    monday: SortOrder_schema_1.SortOrderSchema,
    tuesday: SortOrder_schema_1.SortOrderSchema,
    wednesday: SortOrder_schema_1.SortOrderSchema,
    thursday: SortOrder_schema_1.SortOrderSchema,
    friday: SortOrder_schema_1.SortOrderSchema,
    saturday: SortOrder_schema_1.SortOrderSchema,
    sunday: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema,
    pool: joi_1.default.object().keys(PoolOrderByWithRelationInput_schema_1.PoolOrderByWithRelationInputSchemaObject)
};
