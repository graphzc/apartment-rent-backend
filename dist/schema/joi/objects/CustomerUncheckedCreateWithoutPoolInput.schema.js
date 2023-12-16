"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerUncheckedCreateWithoutPoolInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerOrderUncheckedCreateNestedManyWithoutCustomerInput_schema_1 = require("./CustomerOrderUncheckedCreateNestedManyWithoutCustomerInput.schema");
exports.CustomerUncheckedCreateWithoutPoolInputSchemaObject = {
    id: joi_1.default.string(),
    name: joi_1.default.string().required(),
    address: joi_1.default.alternatives().try(joi_1.default.string()),
    telephone: joi_1.default.alternatives().try(joi_1.default.string()),
    taxId: joi_1.default.alternatives().try(joi_1.default.string()),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date(),
    customerOrder: joi_1.default.object().keys(CustomerOrderUncheckedCreateNestedManyWithoutCustomerInput_schema_1.CustomerOrderUncheckedCreateNestedManyWithoutCustomerInputSchemaObject)
};
