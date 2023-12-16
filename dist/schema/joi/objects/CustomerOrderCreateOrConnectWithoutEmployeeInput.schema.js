"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderCreateOrConnectWithoutEmployeeInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerOrderWhereUniqueInput_schema_1 = require("./CustomerOrderWhereUniqueInput.schema");
const CustomerOrderCreateWithoutEmployeeInput_schema_1 = require("./CustomerOrderCreateWithoutEmployeeInput.schema");
const CustomerOrderUncheckedCreateWithoutEmployeeInput_schema_1 = require("./CustomerOrderUncheckedCreateWithoutEmployeeInput.schema");
exports.CustomerOrderCreateOrConnectWithoutEmployeeInputSchemaObject = {
    where: joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderCreateWithoutEmployeeInput_schema_1.CustomerOrderCreateWithoutEmployeeInputSchemaObject), joi_1.default.object().keys(CustomerOrderUncheckedCreateWithoutEmployeeInput_schema_1.CustomerOrderUncheckedCreateWithoutEmployeeInputSchemaObject))
};
