"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseCreateWithoutCustomerOrderInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PoolCreateNestedOneWithoutPurchaseInput_schema_1 = require("./PoolCreateNestedOneWithoutPurchaseInput.schema");
const ProductCreateNestedOneWithoutPurchaseInput_schema_1 = require("./ProductCreateNestedOneWithoutPurchaseInput.schema");
exports.PurchaseCreateWithoutCustomerOrderInputSchemaObject = {
    id: joi_1.default.string(),
    quantity: joi_1.default.number().required(),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date(),
    pool: joi_1.default.object().keys(PoolCreateNestedOneWithoutPurchaseInput_schema_1.PoolCreateNestedOneWithoutPurchaseInputSchemaObject),
    product: joi_1.default.object().keys(ProductCreateNestedOneWithoutPurchaseInput_schema_1.ProductCreateNestedOneWithoutPurchaseInputSchemaObject)
};
