"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolCreateManyCustomerInputEnvelopeSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PoolCreateManyCustomerInput_schema_1 = require("./PoolCreateManyCustomerInput.schema");
exports.PoolCreateManyCustomerInputEnvelopeSchemaObject = {
    data: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolCreateManyCustomerInput_schema_1.PoolCreateManyCustomerInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PoolCreateManyCustomerInput_schema_1.PoolCreateManyCustomerInputSchemaObject))),
    skipDuplicates: joi_1.default.boolean()
};
