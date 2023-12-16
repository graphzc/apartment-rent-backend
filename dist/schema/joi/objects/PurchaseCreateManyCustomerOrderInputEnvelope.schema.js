"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseCreateManyCustomerOrderInputEnvelopeSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PurchaseCreateManyCustomerOrderInput_schema_1 = require("./PurchaseCreateManyCustomerOrderInput.schema");
exports.PurchaseCreateManyCustomerOrderInputEnvelopeSchemaObject = {
    data: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseCreateManyCustomerOrderInput_schema_1.PurchaseCreateManyCustomerOrderInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseCreateManyCustomerOrderInput_schema_1.PurchaseCreateManyCustomerOrderInputSchemaObject))),
    skipDuplicates: joi_1.default.boolean()
};
