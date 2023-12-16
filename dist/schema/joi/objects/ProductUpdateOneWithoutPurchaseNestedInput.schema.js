"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateOneWithoutPurchaseNestedInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const ProductCreateWithoutPurchaseInput_schema_1 = require("./ProductCreateWithoutPurchaseInput.schema");
const ProductUncheckedCreateWithoutPurchaseInput_schema_1 = require("./ProductUncheckedCreateWithoutPurchaseInput.schema");
const ProductCreateOrConnectWithoutPurchaseInput_schema_1 = require("./ProductCreateOrConnectWithoutPurchaseInput.schema");
const ProductUpsertWithoutPurchaseInput_schema_1 = require("./ProductUpsertWithoutPurchaseInput.schema");
const ProductWhereUniqueInput_schema_1 = require("./ProductWhereUniqueInput.schema");
const ProductUpdateWithoutPurchaseInput_schema_1 = require("./ProductUpdateWithoutPurchaseInput.schema");
const ProductUncheckedUpdateWithoutPurchaseInput_schema_1 = require("./ProductUncheckedUpdateWithoutPurchaseInput.schema");
exports.ProductUpdateOneWithoutPurchaseNestedInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(ProductCreateWithoutPurchaseInput_schema_1.ProductCreateWithoutPurchaseInputSchemaObject), joi_1.default.object().keys(ProductUncheckedCreateWithoutPurchaseInput_schema_1.ProductUncheckedCreateWithoutPurchaseInputSchemaObject)),
    connectOrCreate: joi_1.default.object().keys(ProductCreateOrConnectWithoutPurchaseInput_schema_1.ProductCreateOrConnectWithoutPurchaseInputSchemaObject),
    upsert: joi_1.default.object().keys(ProductUpsertWithoutPurchaseInput_schema_1.ProductUpsertWithoutPurchaseInputSchemaObject),
    disconnect: joi_1.default.boolean(),
    delete: joi_1.default.boolean(),
    connect: joi_1.default.object().keys(ProductWhereUniqueInput_schema_1.ProductWhereUniqueInputSchemaObject),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(ProductUpdateWithoutPurchaseInput_schema_1.ProductUpdateWithoutPurchaseInputSchemaObject), joi_1.default.object().keys(ProductUncheckedUpdateWithoutPurchaseInput_schema_1.ProductUncheckedUpdateWithoutPurchaseInputSchemaObject))
};
