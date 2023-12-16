"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseWhereInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const UuidNullableFilter_schema_1 = require("./UuidNullableFilter.schema");
const IntFilter_schema_1 = require("./IntFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const PoolRelationFilter_schema_1 = require("./PoolRelationFilter.schema");
const PoolWhereInput_schema_1 = require("./PoolWhereInput.schema");
const ProductRelationFilter_schema_1 = require("./ProductRelationFilter.schema");
const ProductWhereInput_schema_1 = require("./ProductWhereInput.schema");
const CustomerOrderRelationFilter_schema_1 = require("./CustomerOrderRelationFilter.schema");
const CustomerOrderWhereInput_schema_1 = require("./CustomerOrderWhereInput.schema");
exports.PurchaseWhereInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#PurchaseWhereInput'), joi_1.default.array().items(joi_1.default.link('#PurchaseWhereInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#PurchaseWhereInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#PurchaseWhereInput'), joi_1.default.array().items(joi_1.default.link('#PurchaseWhereInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidFilter_schema_1.UuidFilterSchemaObject), joi_1.default.string()),
    poolId: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidNullableFilter_schema_1.UuidNullableFilterSchemaObject), joi_1.default.string()),
    productId: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidNullableFilter_schema_1.UuidNullableFilterSchemaObject), joi_1.default.string()),
    customerOrderId: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidFilter_schema_1.UuidFilterSchemaObject), joi_1.default.string()),
    quantity: joi_1.default.alternatives().try(joi_1.default.object().keys(IntFilter_schema_1.IntFilterSchemaObject), joi_1.default.number()),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    pool: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolRelationFilter_schema_1.PoolRelationFilterSchemaObject), joi_1.default.object().keys(PoolWhereInput_schema_1.PoolWhereInputSchemaObject)),
    product: joi_1.default.alternatives().try(joi_1.default.object().keys(ProductRelationFilter_schema_1.ProductRelationFilterSchemaObject), joi_1.default.object().keys(ProductWhereInput_schema_1.ProductWhereInputSchemaObject)),
    customerOrder: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderRelationFilter_schema_1.CustomerOrderRelationFilterSchemaObject), joi_1.default.object().keys(CustomerOrderWhereInput_schema_1.CustomerOrderWhereInputSchemaObject))
};
