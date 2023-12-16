"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolUpsertWithoutServiceDayInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PoolUpdateWithoutServiceDayInput_schema_1 = require("./PoolUpdateWithoutServiceDayInput.schema");
const PoolUncheckedUpdateWithoutServiceDayInput_schema_1 = require("./PoolUncheckedUpdateWithoutServiceDayInput.schema");
const PoolCreateWithoutServiceDayInput_schema_1 = require("./PoolCreateWithoutServiceDayInput.schema");
const PoolUncheckedCreateWithoutServiceDayInput_schema_1 = require("./PoolUncheckedCreateWithoutServiceDayInput.schema");
exports.PoolUpsertWithoutServiceDayInputSchemaObject = {
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolUpdateWithoutServiceDayInput_schema_1.PoolUpdateWithoutServiceDayInputSchemaObject), joi_1.default.object().keys(PoolUncheckedUpdateWithoutServiceDayInput_schema_1.PoolUncheckedUpdateWithoutServiceDayInputSchemaObject)),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolCreateWithoutServiceDayInput_schema_1.PoolCreateWithoutServiceDayInputSchemaObject), joi_1.default.object().keys(PoolUncheckedCreateWithoutServiceDayInput_schema_1.PoolUncheckedCreateWithoutServiceDayInputSchemaObject))
};
