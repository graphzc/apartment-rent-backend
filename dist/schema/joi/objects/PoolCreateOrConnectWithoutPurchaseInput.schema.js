"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolCreateOrConnectWithoutPurchaseInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PoolWhereUniqueInput_schema_1 = require("./PoolWhereUniqueInput.schema");
const PoolCreateWithoutPurchaseInput_schema_1 = require("./PoolCreateWithoutPurchaseInput.schema");
const PoolUncheckedCreateWithoutPurchaseInput_schema_1 = require("./PoolUncheckedCreateWithoutPurchaseInput.schema");
exports.PoolCreateOrConnectWithoutPurchaseInputSchemaObject = {
    where: joi_1.default.object().keys(PoolWhereUniqueInput_schema_1.PoolWhereUniqueInputSchemaObject),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolCreateWithoutPurchaseInput_schema_1.PoolCreateWithoutPurchaseInputSchemaObject), joi_1.default.object().keys(PoolUncheckedCreateWithoutPurchaseInput_schema_1.PoolUncheckedCreateWithoutPurchaseInputSchemaObject))
};
