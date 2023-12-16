"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderUpdateWithWhereUniqueWithoutEmployeeInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerOrderWhereUniqueInput_schema_1 = require("./CustomerOrderWhereUniqueInput.schema");
const CustomerOrderUpdateWithoutEmployeeInput_schema_1 = require("./CustomerOrderUpdateWithoutEmployeeInput.schema");
const CustomerOrderUncheckedUpdateWithoutEmployeeInput_schema_1 = require("./CustomerOrderUncheckedUpdateWithoutEmployeeInput.schema");
exports.CustomerOrderUpdateWithWhereUniqueWithoutEmployeeInputSchemaObject = {
    where: joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject),
    data: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderUpdateWithoutEmployeeInput_schema_1.CustomerOrderUpdateWithoutEmployeeInputSchemaObject), joi_1.default.object().keys(CustomerOrderUncheckedUpdateWithoutEmployeeInput_schema_1.CustomerOrderUncheckedUpdateWithoutEmployeeInputSchemaObject))
};
