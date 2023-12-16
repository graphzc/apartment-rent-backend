"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderScalarWhereInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
exports.CustomerOrderScalarWhereInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#CustomerOrderScalarWhereInput'), joi_1.default.array().items(joi_1.default.link('#CustomerOrderScalarWhereInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#CustomerOrderScalarWhereInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#CustomerOrderScalarWhereInput'), joi_1.default.array().items(joi_1.default.link('#CustomerOrderScalarWhereInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidFilter_schema_1.UuidFilterSchemaObject), joi_1.default.string()),
    customerId: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidFilter_schema_1.UuidFilterSchemaObject), joi_1.default.string()),
    employeeId: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidFilter_schema_1.UuidFilterSchemaObject), joi_1.default.string()),
    invoiceId: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidFilter_schema_1.UuidFilterSchemaObject), joi_1.default.string()),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject))
};
