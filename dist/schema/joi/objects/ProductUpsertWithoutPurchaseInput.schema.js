"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpsertWithoutPurchaseInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const ProductUpdateWithoutPurchaseInput_schema_1 = require("./ProductUpdateWithoutPurchaseInput.schema");
const ProductUncheckedUpdateWithoutPurchaseInput_schema_1 = require("./ProductUncheckedUpdateWithoutPurchaseInput.schema");
const ProductCreateWithoutPurchaseInput_schema_1 = require("./ProductCreateWithoutPurchaseInput.schema");
const ProductUncheckedCreateWithoutPurchaseInput_schema_1 = require("./ProductUncheckedCreateWithoutPurchaseInput.schema");
exports.ProductUpsertWithoutPurchaseInputSchemaObject = {
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(ProductUpdateWithoutPurchaseInput_schema_1.ProductUpdateWithoutPurchaseInputSchemaObject), joi_1.default.object().keys(ProductUncheckedUpdateWithoutPurchaseInput_schema_1.ProductUncheckedUpdateWithoutPurchaseInputSchemaObject)),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(ProductCreateWithoutPurchaseInput_schema_1.ProductCreateWithoutPurchaseInputSchemaObject), joi_1.default.object().keys(ProductUncheckedCreateWithoutPurchaseInput_schema_1.ProductUncheckedCreateWithoutPurchaseInputSchemaObject))
};
