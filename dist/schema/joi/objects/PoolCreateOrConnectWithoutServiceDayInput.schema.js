"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolCreateOrConnectWithoutServiceDayInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PoolWhereUniqueInput_schema_1 = require("./PoolWhereUniqueInput.schema");
const PoolCreateWithoutServiceDayInput_schema_1 = require("./PoolCreateWithoutServiceDayInput.schema");
const PoolUncheckedCreateWithoutServiceDayInput_schema_1 = require("./PoolUncheckedCreateWithoutServiceDayInput.schema");
exports.PoolCreateOrConnectWithoutServiceDayInputSchemaObject = {
    where: joi_1.default.object().keys(PoolWhereUniqueInput_schema_1.PoolWhereUniqueInputSchemaObject),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolCreateWithoutServiceDayInput_schema_1.PoolCreateWithoutServiceDayInputSchemaObject), joi_1.default.object().keys(PoolUncheckedCreateWithoutServiceDayInput_schema_1.PoolUncheckedCreateWithoutServiceDayInputSchemaObject))
};
