"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCreateOrConnectWithoutPoolInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerWhereUniqueInput_schema_1 = require("./CustomerWhereUniqueInput.schema");
const CustomerCreateWithoutPoolInput_schema_1 = require("./CustomerCreateWithoutPoolInput.schema");
const CustomerUncheckedCreateWithoutPoolInput_schema_1 = require("./CustomerUncheckedCreateWithoutPoolInput.schema");
exports.CustomerCreateOrConnectWithoutPoolInputSchemaObject = {
    where: joi_1.default.object().keys(CustomerWhereUniqueInput_schema_1.CustomerWhereUniqueInputSchemaObject),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerCreateWithoutPoolInput_schema_1.CustomerCreateWithoutPoolInputSchemaObject), joi_1.default.object().keys(CustomerUncheckedCreateWithoutPoolInput_schema_1.CustomerUncheckedCreateWithoutPoolInputSchemaObject))
};
