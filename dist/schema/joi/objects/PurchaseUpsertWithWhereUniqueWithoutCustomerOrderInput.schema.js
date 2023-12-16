"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseUpsertWithWhereUniqueWithoutCustomerOrderInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PurchaseWhereUniqueInput_schema_1 = require("./PurchaseWhereUniqueInput.schema");
const PurchaseUpdateWithoutCustomerOrderInput_schema_1 = require("./PurchaseUpdateWithoutCustomerOrderInput.schema");
const PurchaseUncheckedUpdateWithoutCustomerOrderInput_schema_1 = require("./PurchaseUncheckedUpdateWithoutCustomerOrderInput.schema");
const PurchaseCreateWithoutCustomerOrderInput_schema_1 = require("./PurchaseCreateWithoutCustomerOrderInput.schema");
const PurchaseUncheckedCreateWithoutCustomerOrderInput_schema_1 = require("./PurchaseUncheckedCreateWithoutCustomerOrderInput.schema");
exports.PurchaseUpsertWithWhereUniqueWithoutCustomerOrderInputSchemaObject = {
    where: joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseUpdateWithoutCustomerOrderInput_schema_1.PurchaseUpdateWithoutCustomerOrderInputSchemaObject), joi_1.default.object().keys(PurchaseUncheckedUpdateWithoutCustomerOrderInput_schema_1.PurchaseUncheckedUpdateWithoutCustomerOrderInputSchemaObject)),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseCreateWithoutCustomerOrderInput_schema_1.PurchaseCreateWithoutCustomerOrderInputSchemaObject), joi_1.default.object().keys(PurchaseUncheckedCreateWithoutCustomerOrderInput_schema_1.PurchaseUncheckedCreateWithoutCustomerOrderInputSchemaObject))
};
