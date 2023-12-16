"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolUpsertWithWhereUniqueWithoutCustomerInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PoolWhereUniqueInput_schema_1 = require("./PoolWhereUniqueInput.schema");
const PoolUpdateWithoutCustomerInput_schema_1 = require("./PoolUpdateWithoutCustomerInput.schema");
const PoolUncheckedUpdateWithoutCustomerInput_schema_1 = require("./PoolUncheckedUpdateWithoutCustomerInput.schema");
const PoolCreateWithoutCustomerInput_schema_1 = require("./PoolCreateWithoutCustomerInput.schema");
const PoolUncheckedCreateWithoutCustomerInput_schema_1 = require("./PoolUncheckedCreateWithoutCustomerInput.schema");
exports.PoolUpsertWithWhereUniqueWithoutCustomerInputSchemaObject = {
    where: joi_1.default.object().keys(PoolWhereUniqueInput_schema_1.PoolWhereUniqueInputSchemaObject),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolUpdateWithoutCustomerInput_schema_1.PoolUpdateWithoutCustomerInputSchemaObject), joi_1.default.object().keys(PoolUncheckedUpdateWithoutCustomerInput_schema_1.PoolUncheckedUpdateWithoutCustomerInputSchemaObject)),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolCreateWithoutCustomerInput_schema_1.PoolCreateWithoutCustomerInputSchemaObject), joi_1.default.object().keys(PoolUncheckedCreateWithoutCustomerInput_schema_1.PoolUncheckedCreateWithoutCustomerInputSchemaObject))
};
