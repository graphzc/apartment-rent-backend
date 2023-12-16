"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerUncheckedCreateInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PoolUncheckedCreateNestedManyWithoutCustomerInput_schema_1 = require("./PoolUncheckedCreateNestedManyWithoutCustomerInput.schema");
const CustomerOrderUncheckedCreateNestedManyWithoutCustomerInput_schema_1 = require("./CustomerOrderUncheckedCreateNestedManyWithoutCustomerInput.schema");
exports.CustomerUncheckedCreateInputSchemaObject = {
    id: joi_1.default.string(),
    name: joi_1.default.string().required(),
    address: joi_1.default.alternatives().try(joi_1.default.string()),
    telephone: joi_1.default.alternatives().try(joi_1.default.string()),
    taxId: joi_1.default.alternatives().try(joi_1.default.string()),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date(),
    pool: joi_1.default.object().keys(PoolUncheckedCreateNestedManyWithoutCustomerInput_schema_1.PoolUncheckedCreateNestedManyWithoutCustomerInputSchemaObject),
    customerOrder: joi_1.default.object().keys(CustomerOrderUncheckedCreateNestedManyWithoutCustomerInput_schema_1.CustomerOrderUncheckedCreateNestedManyWithoutCustomerInputSchemaObject)
};
