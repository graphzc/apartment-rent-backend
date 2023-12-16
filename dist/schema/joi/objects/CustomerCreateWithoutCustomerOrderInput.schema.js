"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCreateWithoutCustomerOrderInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PoolCreateNestedManyWithoutCustomerInput_schema_1 = require("./PoolCreateNestedManyWithoutCustomerInput.schema");
exports.CustomerCreateWithoutCustomerOrderInputSchemaObject = {
    id: joi_1.default.string(),
    name: joi_1.default.string().required(),
    address: joi_1.default.alternatives().try(joi_1.default.string()),
    telephone: joi_1.default.alternatives().try(joi_1.default.string()),
    taxId: joi_1.default.alternatives().try(joi_1.default.string()),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date(),
    pool: joi_1.default.object().keys(PoolCreateNestedManyWithoutCustomerInput_schema_1.PoolCreateNestedManyWithoutCustomerInputSchemaObject)
};
