"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderWhereInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const CustomerRelationFilter_schema_1 = require("./CustomerRelationFilter.schema");
const CustomerWhereInput_schema_1 = require("./CustomerWhereInput.schema");
const EmployeeRelationFilter_schema_1 = require("./EmployeeRelationFilter.schema");
const EmployeeWhereInput_schema_1 = require("./EmployeeWhereInput.schema");
const InvoiceRelationFilter_schema_1 = require("./InvoiceRelationFilter.schema");
const InvoiceWhereInput_schema_1 = require("./InvoiceWhereInput.schema");
const PurchaseListRelationFilter_schema_1 = require("./PurchaseListRelationFilter.schema");
exports.CustomerOrderWhereInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#CustomerOrderWhereInput'), joi_1.default.array().items(joi_1.default.link('#CustomerOrderWhereInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#CustomerOrderWhereInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#CustomerOrderWhereInput'), joi_1.default.array().items(joi_1.default.link('#CustomerOrderWhereInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidFilter_schema_1.UuidFilterSchemaObject), joi_1.default.string()),
    customerId: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidFilter_schema_1.UuidFilterSchemaObject), joi_1.default.string()),
    employeeId: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidFilter_schema_1.UuidFilterSchemaObject), joi_1.default.string()),
    invoiceId: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidFilter_schema_1.UuidFilterSchemaObject), joi_1.default.string()),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    customer: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerRelationFilter_schema_1.CustomerRelationFilterSchemaObject), joi_1.default.object().keys(CustomerWhereInput_schema_1.CustomerWhereInputSchemaObject)),
    employee: joi_1.default.alternatives().try(joi_1.default.object().keys(EmployeeRelationFilter_schema_1.EmployeeRelationFilterSchemaObject), joi_1.default.object().keys(EmployeeWhereInput_schema_1.EmployeeWhereInputSchemaObject)),
    invoice: joi_1.default.alternatives().try(joi_1.default.object().keys(InvoiceRelationFilter_schema_1.InvoiceRelationFilterSchemaObject), joi_1.default.object().keys(InvoiceWhereInput_schema_1.InvoiceWhereInputSchemaObject)),
    purchase: joi_1.default.object().keys(PurchaseListRelationFilter_schema_1.PurchaseListRelationFilterSchemaObject)
};
