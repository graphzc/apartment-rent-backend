"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseCreateWithoutPoolInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const ProductCreateNestedOneWithoutPurchaseInput_schema_1 = require("./ProductCreateNestedOneWithoutPurchaseInput.schema");
const CustomerOrderCreateNestedOneWithoutPurchaseInput_schema_1 = require("./CustomerOrderCreateNestedOneWithoutPurchaseInput.schema");
exports.PurchaseCreateWithoutPoolInputSchemaObject = {
    id: joi_1.default.string(),
    quantity: joi_1.default.number().required(),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date(),
    product: joi_1.default.object().keys(ProductCreateNestedOneWithoutPurchaseInput_schema_1.ProductCreateNestedOneWithoutPurchaseInputSchemaObject),
    customerOrder: joi_1.default.object().keys(CustomerOrderCreateNestedOneWithoutPurchaseInput_schema_1.CustomerOrderCreateNestedOneWithoutPurchaseInputSchemaObject)
};
