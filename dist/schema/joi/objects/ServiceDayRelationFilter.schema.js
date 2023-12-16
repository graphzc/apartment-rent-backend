"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDayRelationFilterSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const ServiceDayWhereInput_schema_1 = require("./ServiceDayWhereInput.schema");
exports.ServiceDayRelationFilterSchemaObject = {
    is: joi_1.default.alternatives().try(joi_1.default.object().keys(ServiceDayWhereInput_schema_1.ServiceDayWhereInputSchemaObject)),
    isNot: joi_1.default.alternatives().try(joi_1.default.object().keys(ServiceDayWhereInput_schema_1.ServiceDayWhereInputSchemaObject))
};
