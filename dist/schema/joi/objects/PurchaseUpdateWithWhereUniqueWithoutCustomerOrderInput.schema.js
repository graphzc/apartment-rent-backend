"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseUpdateWithWhereUniqueWithoutCustomerOrderInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PurchaseWhereUniqueInput_schema_1 = require("./PurchaseWhereUniqueInput.schema");
const PurchaseUpdateWithoutCustomerOrderInput_schema_1 = require("./PurchaseUpdateWithoutCustomerOrderInput.schema");
const PurchaseUncheckedUpdateWithoutCustomerOrderInput_schema_1 = require("./PurchaseUncheckedUpdateWithoutCustomerOrderInput.schema");
exports.PurchaseUpdateWithWhereUniqueWithoutCustomerOrderInputSchemaObject = {
    where: joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject),
    data: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseUpdateWithoutCustomerOrderInput_schema_1.PurchaseUpdateWithoutCustomerOrderInputSchemaObject), joi_1.default.object().keys(PurchaseUncheckedUpdateWithoutCustomerOrderInput_schema_1.PurchaseUncheckedUpdateWithoutCustomerOrderInputSchemaObject))
};
