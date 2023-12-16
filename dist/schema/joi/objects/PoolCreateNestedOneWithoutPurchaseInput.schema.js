"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolCreateNestedOneWithoutPurchaseInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PoolCreateWithoutPurchaseInput_schema_1 = require("./PoolCreateWithoutPurchaseInput.schema");
const PoolUncheckedCreateWithoutPurchaseInput_schema_1 = require("./PoolUncheckedCreateWithoutPurchaseInput.schema");
const PoolCreateOrConnectWithoutPurchaseInput_schema_1 = require("./PoolCreateOrConnectWithoutPurchaseInput.schema");
const PoolWhereUniqueInput_schema_1 = require("./PoolWhereUniqueInput.schema");
exports.PoolCreateNestedOneWithoutPurchaseInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolCreateWithoutPurchaseInput_schema_1.PoolCreateWithoutPurchaseInputSchemaObject), joi_1.default.object().keys(PoolUncheckedCreateWithoutPurchaseInput_schema_1.PoolUncheckedCreateWithoutPurchaseInputSchemaObject)),
    connectOrCreate: joi_1.default.object().keys(PoolCreateOrConnectWithoutPurchaseInput_schema_1.PoolCreateOrConnectWithoutPurchaseInputSchemaObject),
    connect: joi_1.default.object().keys(PoolWhereUniqueInput_schema_1.PoolWhereUniqueInputSchemaObject)
};
