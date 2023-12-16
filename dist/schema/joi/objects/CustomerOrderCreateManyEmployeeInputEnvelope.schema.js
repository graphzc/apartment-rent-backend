"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderCreateManyEmployeeInputEnvelopeSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerOrderCreateManyEmployeeInput_schema_1 = require("./CustomerOrderCreateManyEmployeeInput.schema");
exports.CustomerOrderCreateManyEmployeeInputEnvelopeSchemaObject = {
    data: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderCreateManyEmployeeInput_schema_1.CustomerOrderCreateManyEmployeeInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(CustomerOrderCreateManyEmployeeInput_schema_1.CustomerOrderCreateManyEmployeeInputSchemaObject))),
    skipDuplicates: joi_1.default.boolean()
};
