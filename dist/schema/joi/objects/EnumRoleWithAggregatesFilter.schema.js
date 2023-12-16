"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumRoleWithAggregatesFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const NestedEnumRoleWithAggregatesFilter_schema_1 = require("./NestedEnumRoleWithAggregatesFilter.schema");
const NestedIntFilter_schema_1 = require("./NestedIntFilter.schema");
const NestedEnumRoleFilter_schema_1 = require("./NestedEnumRoleFilter.schema");
exports.EnumRoleWithAggregatesFilterSchemaObject = {
    not: joi_1.default.alternatives().try(joi_1.default.object().keys(NestedEnumRoleWithAggregatesFilter_schema_1.NestedEnumRoleWithAggregatesFilterSchemaObject)),
    _count: joi_1.default.object().keys(NestedIntFilter_schema_1.NestedIntFilterSchemaObject),
    _min: joi_1.default.object().keys(NestedEnumRoleFilter_schema_1.NestedEnumRoleFilterSchemaObject),
    _max: joi_1.default.object().keys(NestedEnumRoleFilter_schema_1.NestedEnumRoleFilterSchemaObject)
};
