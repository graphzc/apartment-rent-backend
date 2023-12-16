"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseListRelationFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PurchaseWhereInput_schema_1 = require("./PurchaseWhereInput.schema");
exports.PurchaseListRelationFilterSchemaObject = {
    every: joi_1.default.object().keys(PurchaseWhereInput_schema_1.PurchaseWhereInputSchemaObject),
    some: joi_1.default.object().keys(PurchaseWhereInput_schema_1.PurchaseWhereInputSchemaObject),
    none: joi_1.default.object().keys(PurchaseWhereInput_schema_1.PurchaseWhereInputSchemaObject)
};
