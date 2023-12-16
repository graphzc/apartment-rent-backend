"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateOrConnectWithoutPurchaseInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const ProductWhereUniqueInput_schema_1 = require("./ProductWhereUniqueInput.schema");
const ProductCreateWithoutPurchaseInput_schema_1 = require("./ProductCreateWithoutPurchaseInput.schema");
const ProductUncheckedCreateWithoutPurchaseInput_schema_1 = require("./ProductUncheckedCreateWithoutPurchaseInput.schema");
exports.ProductCreateOrConnectWithoutPurchaseInputSchemaObject = {
    where: joi_1.default.object().keys(ProductWhereUniqueInput_schema_1.ProductWhereUniqueInputSchemaObject),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(ProductCreateWithoutPurchaseInput_schema_1.ProductCreateWithoutPurchaseInputSchemaObject), joi_1.default.object().keys(ProductUncheckedCreateWithoutPurchaseInput_schema_1.ProductUncheckedCreateWithoutPurchaseInputSchemaObject))
};
