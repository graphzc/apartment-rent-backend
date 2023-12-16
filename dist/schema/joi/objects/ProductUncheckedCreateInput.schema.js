"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUncheckedCreateInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PurchaseUncheckedCreateNestedManyWithoutProductInput_schema_1 = require("./PurchaseUncheckedCreateNestedManyWithoutProductInput.schema");
exports.ProductUncheckedCreateInputSchemaObject = {
    id: joi_1.default.string(),
    code: joi_1.default.alternatives().try(joi_1.default.string()),
    name: joi_1.default.string().required(),
    description: joi_1.default.alternatives().try(joi_1.default.string()),
    price: joi_1.default.number().required(),
    unit: joi_1.default.string().required(),
    createdAt: joi_1.default.date(),
    updatedAt: joi_1.default.date(),
    purchase: joi_1.default.object().keys(PurchaseUncheckedCreateNestedManyWithoutProductInput_schema_1.PurchaseUncheckedCreateNestedManyWithoutProductInputSchemaObject)
};
