"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolWhereInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const StringFilter_schema_1 = require("./StringFilter.schema");
const FloatFilter_schema_1 = require("./FloatFilter.schema");
const BoolFilter_schema_1 = require("./BoolFilter.schema");
const EnumPoolTypeFilter_schema_1 = require("./EnumPoolTypeFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const CustomerRelationFilter_schema_1 = require("./CustomerRelationFilter.schema");
const CustomerWhereInput_schema_1 = require("./CustomerWhereInput.schema");
const PurchaseListRelationFilter_schema_1 = require("./PurchaseListRelationFilter.schema");
const ServiceDayRelationFilter_schema_1 = require("./ServiceDayRelationFilter.schema");
const ServiceDayWhereInput_schema_1 = require("./ServiceDayWhereInput.schema");
exports.PoolWhereInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#PoolWhereInput'), joi_1.default.array().items(joi_1.default.link('#PoolWhereInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#PoolWhereInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#PoolWhereInput'), joi_1.default.array().items(joi_1.default.link('#PoolWhereInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidFilter_schema_1.UuidFilterSchemaObject), joi_1.default.string()),
    customerId: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidFilter_schema_1.UuidFilterSchemaObject), joi_1.default.string()),
    address: joi_1.default.alternatives().try(joi_1.default.object().keys(StringFilter_schema_1.StringFilterSchemaObject), joi_1.default.string()),
    price: joi_1.default.alternatives().try(joi_1.default.object().keys(FloatFilter_schema_1.FloatFilterSchemaObject), joi_1.default.number()),
    chemicalIncluded: joi_1.default.alternatives().try(joi_1.default.object().keys(BoolFilter_schema_1.BoolFilterSchemaObject), joi_1.default.boolean()),
    type: joi_1.default.alternatives().try(joi_1.default.object().keys(EnumPoolTypeFilter_schema_1.EnumPoolTypeFilterSchemaObject)),
    inService: joi_1.default.alternatives().try(joi_1.default.object().keys(BoolFilter_schema_1.BoolFilterSchemaObject), joi_1.default.boolean()),
    serviceDayId: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidFilter_schema_1.UuidFilterSchemaObject), joi_1.default.string()),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    customer: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerRelationFilter_schema_1.CustomerRelationFilterSchemaObject), joi_1.default.object().keys(CustomerWhereInput_schema_1.CustomerWhereInputSchemaObject)),
    purchase: joi_1.default.object().keys(PurchaseListRelationFilter_schema_1.PurchaseListRelationFilterSchemaObject),
    serviceDay: joi_1.default.alternatives().try(joi_1.default.object().keys(ServiceDayRelationFilter_schema_1.ServiceDayRelationFilterSchemaObject), joi_1.default.object().keys(ServiceDayWhereInput_schema_1.ServiceDayWhereInputSchemaObject))
};
