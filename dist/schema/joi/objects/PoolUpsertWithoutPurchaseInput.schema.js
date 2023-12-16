"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolUpsertWithoutPurchaseInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PoolUpdateWithoutPurchaseInput_schema_1 = require("./PoolUpdateWithoutPurchaseInput.schema");
const PoolUncheckedUpdateWithoutPurchaseInput_schema_1 = require("./PoolUncheckedUpdateWithoutPurchaseInput.schema");
const PoolCreateWithoutPurchaseInput_schema_1 = require("./PoolCreateWithoutPurchaseInput.schema");
const PoolUncheckedCreateWithoutPurchaseInput_schema_1 = require("./PoolUncheckedCreateWithoutPurchaseInput.schema");
exports.PoolUpsertWithoutPurchaseInputSchemaObject = {
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolUpdateWithoutPurchaseInput_schema_1.PoolUpdateWithoutPurchaseInputSchemaObject), joi_1.default.object().keys(PoolUncheckedUpdateWithoutPurchaseInput_schema_1.PoolUncheckedUpdateWithoutPurchaseInputSchemaObject)),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolCreateWithoutPurchaseInput_schema_1.PoolCreateWithoutPurchaseInputSchemaObject), joi_1.default.object().keys(PoolUncheckedCreateWithoutPurchaseInput_schema_1.PoolUncheckedCreateWithoutPurchaseInputSchemaObject))
};
