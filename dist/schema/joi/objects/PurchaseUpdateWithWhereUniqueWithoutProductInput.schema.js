"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseUpdateWithWhereUniqueWithoutProductInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PurchaseWhereUniqueInput_schema_1 = require("./PurchaseWhereUniqueInput.schema");
const PurchaseUpdateWithoutProductInput_schema_1 = require("./PurchaseUpdateWithoutProductInput.schema");
const PurchaseUncheckedUpdateWithoutProductInput_schema_1 = require("./PurchaseUncheckedUpdateWithoutProductInput.schema");
exports.PurchaseUpdateWithWhereUniqueWithoutProductInputSchemaObject = {
    where: joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject),
    data: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseUpdateWithoutProductInput_schema_1.PurchaseUpdateWithoutProductInputSchemaObject), joi_1.default.object().keys(PurchaseUncheckedUpdateWithoutProductInput_schema_1.PurchaseUncheckedUpdateWithoutProductInputSchemaObject))
};
