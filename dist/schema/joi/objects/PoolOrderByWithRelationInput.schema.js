"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolOrderByWithRelationInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const SortOrder_schema_1 = require("../enums/SortOrder.schema");
const CustomerOrderByWithRelationInput_schema_1 = require("./CustomerOrderByWithRelationInput.schema");
const PurchaseOrderByRelationAggregateInput_schema_1 = require("./PurchaseOrderByRelationAggregateInput.schema");
const ServiceDayOrderByWithRelationInput_schema_1 = require("./ServiceDayOrderByWithRelationInput.schema");
exports.PoolOrderByWithRelationInputSchemaObject = {
    id: SortOrder_schema_1.SortOrderSchema,
    customerId: SortOrder_schema_1.SortOrderSchema,
    address: SortOrder_schema_1.SortOrderSchema,
    price: SortOrder_schema_1.SortOrderSchema,
    chemicalIncluded: SortOrder_schema_1.SortOrderSchema,
    type: SortOrder_schema_1.SortOrderSchema,
    inService: SortOrder_schema_1.SortOrderSchema,
    serviceDayId: SortOrder_schema_1.SortOrderSchema,
    createdAt: SortOrder_schema_1.SortOrderSchema,
    updatedAt: SortOrder_schema_1.SortOrderSchema,
    customer: joi_1.default.object().keys(CustomerOrderByWithRelationInput_schema_1.CustomerOrderByWithRelationInputSchemaObject),
    purchase: joi_1.default.object().keys(PurchaseOrderByRelationAggregateInput_schema_1.PurchaseOrderByRelationAggregateInputSchemaObject),
    serviceDay: joi_1.default.object().keys(ServiceDayOrderByWithRelationInput_schema_1.ServiceDayOrderByWithRelationInputSchemaObject)
};
