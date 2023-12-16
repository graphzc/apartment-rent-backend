"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderUpdateManyWithWhereWithoutEmployeeInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerOrderScalarWhereInput_schema_1 = require("./CustomerOrderScalarWhereInput.schema");
const CustomerOrderUpdateManyMutationInput_schema_1 = require("./CustomerOrderUpdateManyMutationInput.schema");
const CustomerOrderUncheckedUpdateManyWithoutCustomerOrderInput_schema_1 = require("./CustomerOrderUncheckedUpdateManyWithoutCustomerOrderInput.schema");
exports.CustomerOrderUpdateManyWithWhereWithoutEmployeeInputSchemaObject = {
    where: joi_1.default.object().keys(CustomerOrderScalarWhereInput_schema_1.CustomerOrderScalarWhereInputSchemaObject),
    data: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderUpdateManyMutationInput_schema_1.CustomerOrderUpdateManyMutationInputSchemaObject), joi_1.default.object().keys(CustomerOrderUncheckedUpdateManyWithoutCustomerOrderInput_schema_1.CustomerOrderUncheckedUpdateManyWithoutCustomerOrderInputSchemaObject))
};
