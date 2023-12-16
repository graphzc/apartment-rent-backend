"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolUpdateManyWithWhereWithoutCustomerInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PoolScalarWhereInput_schema_1 = require("./PoolScalarWhereInput.schema");
const PoolUpdateManyMutationInput_schema_1 = require("./PoolUpdateManyMutationInput.schema");
const PoolUncheckedUpdateManyWithoutPoolInput_schema_1 = require("./PoolUncheckedUpdateManyWithoutPoolInput.schema");
exports.PoolUpdateManyWithWhereWithoutCustomerInputSchemaObject = {
    where: joi_1.default.object().keys(PoolScalarWhereInput_schema_1.PoolScalarWhereInputSchemaObject),
    data: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolUpdateManyMutationInput_schema_1.PoolUpdateManyMutationInputSchemaObject), joi_1.default.object().keys(PoolUncheckedUpdateManyWithoutPoolInput_schema_1.PoolUncheckedUpdateManyWithoutPoolInputSchemaObject))
};
