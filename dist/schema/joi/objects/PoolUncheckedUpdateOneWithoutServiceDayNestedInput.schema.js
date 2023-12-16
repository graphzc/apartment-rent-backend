"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolUncheckedUpdateOneWithoutServiceDayNestedInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PoolCreateWithoutServiceDayInput_schema_1 = require("./PoolCreateWithoutServiceDayInput.schema");
const PoolUncheckedCreateWithoutServiceDayInput_schema_1 = require("./PoolUncheckedCreateWithoutServiceDayInput.schema");
const PoolCreateOrConnectWithoutServiceDayInput_schema_1 = require("./PoolCreateOrConnectWithoutServiceDayInput.schema");
const PoolUpsertWithoutServiceDayInput_schema_1 = require("./PoolUpsertWithoutServiceDayInput.schema");
const PoolWhereUniqueInput_schema_1 = require("./PoolWhereUniqueInput.schema");
const PoolUpdateWithoutServiceDayInput_schema_1 = require("./PoolUpdateWithoutServiceDayInput.schema");
const PoolUncheckedUpdateWithoutServiceDayInput_schema_1 = require("./PoolUncheckedUpdateWithoutServiceDayInput.schema");
exports.PoolUncheckedUpdateOneWithoutServiceDayNestedInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolCreateWithoutServiceDayInput_schema_1.PoolCreateWithoutServiceDayInputSchemaObject), joi_1.default.object().keys(PoolUncheckedCreateWithoutServiceDayInput_schema_1.PoolUncheckedCreateWithoutServiceDayInputSchemaObject)),
    connectOrCreate: joi_1.default.object().keys(PoolCreateOrConnectWithoutServiceDayInput_schema_1.PoolCreateOrConnectWithoutServiceDayInputSchemaObject),
    upsert: joi_1.default.object().keys(PoolUpsertWithoutServiceDayInput_schema_1.PoolUpsertWithoutServiceDayInputSchemaObject),
    disconnect: joi_1.default.boolean(),
    delete: joi_1.default.boolean(),
    connect: joi_1.default.object().keys(PoolWhereUniqueInput_schema_1.PoolWhereUniqueInputSchemaObject),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolUpdateWithoutServiceDayInput_schema_1.PoolUpdateWithoutServiceDayInputSchemaObject), joi_1.default.object().keys(PoolUncheckedUpdateWithoutServiceDayInput_schema_1.PoolUncheckedUpdateWithoutServiceDayInputSchemaObject))
};
