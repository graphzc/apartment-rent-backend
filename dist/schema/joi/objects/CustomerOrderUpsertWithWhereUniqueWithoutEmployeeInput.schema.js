"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderUpsertWithWhereUniqueWithoutEmployeeInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerOrderWhereUniqueInput_schema_1 = require("./CustomerOrderWhereUniqueInput.schema");
const CustomerOrderUpdateWithoutEmployeeInput_schema_1 = require("./CustomerOrderUpdateWithoutEmployeeInput.schema");
const CustomerOrderUncheckedUpdateWithoutEmployeeInput_schema_1 = require("./CustomerOrderUncheckedUpdateWithoutEmployeeInput.schema");
const CustomerOrderCreateWithoutEmployeeInput_schema_1 = require("./CustomerOrderCreateWithoutEmployeeInput.schema");
const CustomerOrderUncheckedCreateWithoutEmployeeInput_schema_1 = require("./CustomerOrderUncheckedCreateWithoutEmployeeInput.schema");
exports.CustomerOrderUpsertWithWhereUniqueWithoutEmployeeInputSchemaObject = {
    where: joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderUpdateWithoutEmployeeInput_schema_1.CustomerOrderUpdateWithoutEmployeeInputSchemaObject), joi_1.default.object().keys(CustomerOrderUncheckedUpdateWithoutEmployeeInput_schema_1.CustomerOrderUncheckedUpdateWithoutEmployeeInputSchemaObject)),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderCreateWithoutEmployeeInput_schema_1.CustomerOrderCreateWithoutEmployeeInputSchemaObject), joi_1.default.object().keys(CustomerOrderUncheckedCreateWithoutEmployeeInput_schema_1.CustomerOrderUncheckedCreateWithoutEmployeeInputSchemaObject))
};
