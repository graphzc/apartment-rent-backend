"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWhereInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const StringFilter_schema_1 = require("./StringFilter.schema");
const StringNullableFilter_schema_1 = require("./StringNullableFilter.schema");
const EnumRoleFilter_schema_1 = require("./EnumRoleFilter.schema");
const DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
const BookingListRelationFilter_schema_1 = require("./BookingListRelationFilter.schema");
exports.UserWhereInputSchemaObject = {
    AND: joi_1.default.alternatives().try(joi_1.default.link('#UserWhereInput'), joi_1.default.array().items(joi_1.default.link('#UserWhereInput'))),
    OR: joi_1.default.array().items(joi_1.default.link('#UserWhereInput')),
    NOT: joi_1.default.alternatives().try(joi_1.default.link('#UserWhereInput'), joi_1.default.array().items(joi_1.default.link('#UserWhereInput'))),
    id: joi_1.default.alternatives().try(joi_1.default.object().keys(StringFilter_schema_1.StringFilterSchemaObject), joi_1.default.string()),
    email: joi_1.default.alternatives().try(joi_1.default.object().keys(StringFilter_schema_1.StringFilterSchemaObject), joi_1.default.string()),
    name: joi_1.default.alternatives().try(joi_1.default.object().keys(StringNullableFilter_schema_1.StringNullableFilterSchemaObject), joi_1.default.string()),
    password: joi_1.default.alternatives().try(joi_1.default.object().keys(StringFilter_schema_1.StringFilterSchemaObject), joi_1.default.string()),
    role: joi_1.default.alternatives().try(joi_1.default.object().keys(EnumRoleFilter_schema_1.EnumRoleFilterSchemaObject)),
    createdAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    updatedAt: joi_1.default.alternatives().try(joi_1.default.object().keys(DateTimeFilter_schema_1.DateTimeFilterSchemaObject)),
    booking: joi_1.default.object().keys(BookingListRelationFilter_schema_1.BookingListRelationFilterSchemaObject)
};
