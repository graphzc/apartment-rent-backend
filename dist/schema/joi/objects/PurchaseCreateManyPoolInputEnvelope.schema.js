"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseCreateManyPoolInputEnvelopeSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PurchaseCreateManyPoolInput_schema_1 = require("./PurchaseCreateManyPoolInput.schema");
exports.PurchaseCreateManyPoolInputEnvelopeSchemaObject = {
    data: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseCreateManyPoolInput_schema_1.PurchaseCreateManyPoolInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseCreateManyPoolInput_schema_1.PurchaseCreateManyPoolInputSchemaObject))),
    skipDuplicates: joi_1.default.boolean()
};
