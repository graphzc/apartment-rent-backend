"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDayWhereInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const UuidFilter_schema_1 = require("./UuidFilter.schema");
const BoolFilter_schema_1 = require("./BoolFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const PoolRelationFilter_schema_1 = require("./PoolRelationFilter.schema");
const PoolWhereInput_schema_1 = require("./PoolWhereInput.schema");
exports.ServiceDayWhereInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#ServiceDayWhereInput'), joi_1.default.array().items(joi_1.default.link('#ServiceDayWhereInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#ServiceDayWhereInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#ServiceDayWhereInput'), joi_1.default.array().items(joi_1.default.link('#ServiceDayWhereInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(UuidFilter_schema_1.UuidFilterSchemaObject), joi_1.default.string()),
    monday: joi_1.default.alternatives().try(joi_1.default.object().keys(BoolFilter_schema_1.BoolFilterSchemaObject), joi_1.default.boolean()),
    tuesday: joi_1.default.alternatives().try(joi_1.default.object().keys(BoolFilter_schema_1.BoolFilterSchemaObject), joi_1.default.boolean()),
    wednesday: joi_1.default.alternatives().try(joi_1.default.object().keys(BoolFilter_schema_1.BoolFilterSchemaObject), joi_1.default.boolean()),
    thursday: joi_1.default.alternatives().try(joi_1.default.object().keys(BoolFilter_schema_1.BoolFilterSchemaObject), joi_1.default.boolean()),
    friday: joi_1.default.alternatives().try(joi_1.default.object().keys(BoolFilter_schema_1.BoolFilterSchemaObject), joi_1.default.boolean()),
    saturday: joi_1.default.alternatives().try(joi_1.default.object().keys(BoolFilter_schema_1.BoolFilterSchemaObject), joi_1.default.boolean()),
    sunday: joi_1.default.alternatives().try(joi_1.default.object().keys(BoolFilter_schema_1.BoolFilterSchemaObject), joi_1.default.boolean()),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    pool: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolRelationFilter_schema_1.PoolRelationFilterSchemaObject), joi_1.default.object().keys(PoolWhereInput_schema_1.PoolWhereInputSchemaObject))
};
