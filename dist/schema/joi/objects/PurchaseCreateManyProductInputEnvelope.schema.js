"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseCreateManyProductInputEnvelopeSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PurchaseCreateManyProductInput_schema_1 = require("./PurchaseCreateManyProductInput.schema");
exports.PurchaseCreateManyProductInputEnvelopeSchemaObject = {
    data: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseCreateManyProductInput_schema_1.PurchaseCreateManyProductInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseCreateManyProductInput_schema_1.PurchaseCreateManyProductInputSchemaObject))),
    skipDuplicates: joi_1.default.boolean()
};
