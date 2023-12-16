"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerUpsertWithoutPoolInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerUpdateWithoutPoolInput_schema_1 = require("./CustomerUpdateWithoutPoolInput.schema");
const CustomerUncheckedUpdateWithoutPoolInput_schema_1 = require("./CustomerUncheckedUpdateWithoutPoolInput.schema");
const CustomerCreateWithoutPoolInput_schema_1 = require("./CustomerCreateWithoutPoolInput.schema");
const CustomerUncheckedCreateWithoutPoolInput_schema_1 = require("./CustomerUncheckedCreateWithoutPoolInput.schema");
exports.CustomerUpsertWithoutPoolInputSchemaObject = {
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerUpdateWithoutPoolInput_schema_1.CustomerUpdateWithoutPoolInputSchemaObject), joi_1.default.object().keys(CustomerUncheckedUpdateWithoutPoolInput_schema_1.CustomerUncheckedUpdateWithoutPoolInputSchemaObject)),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerCreateWithoutPoolInput_schema_1.CustomerCreateWithoutPoolInputSchemaObject), joi_1.default.object().keys(CustomerUncheckedCreateWithoutPoolInput_schema_1.CustomerUncheckedCreateWithoutPoolInputSchemaObject))
};
