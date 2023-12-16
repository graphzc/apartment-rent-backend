"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolUpdateOneWithoutPurchaseNestedInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PoolCreateWithoutPurchaseInput_schema_1 = require("./PoolCreateWithoutPurchaseInput.schema");
const PoolUncheckedCreateWithoutPurchaseInput_schema_1 = require("./PoolUncheckedCreateWithoutPurchaseInput.schema");
const PoolCreateOrConnectWithoutPurchaseInput_schema_1 = require("./PoolCreateOrConnectWithoutPurchaseInput.schema");
const PoolUpsertWithoutPurchaseInput_schema_1 = require("./PoolUpsertWithoutPurchaseInput.schema");
const PoolWhereUniqueInput_schema_1 = require("./PoolWhereUniqueInput.schema");
const PoolUpdateWithoutPurchaseInput_schema_1 = require("./PoolUpdateWithoutPurchaseInput.schema");
const PoolUncheckedUpdateWithoutPurchaseInput_schema_1 = require("./PoolUncheckedUpdateWithoutPurchaseInput.schema");
exports.PoolUpdateOneWithoutPurchaseNestedInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolCreateWithoutPurchaseInput_schema_1.PoolCreateWithoutPurchaseInputSchemaObject), joi_1.default.object().keys(PoolUncheckedCreateWithoutPurchaseInput_schema_1.PoolUncheckedCreateWithoutPurchaseInputSchemaObject)),
    connectOrCreate: joi_1.default.object().keys(PoolCreateOrConnectWithoutPurchaseInput_schema_1.PoolCreateOrConnectWithoutPurchaseInputSchemaObject),
    upsert: joi_1.default.object().keys(PoolUpsertWithoutPurchaseInput_schema_1.PoolUpsertWithoutPurchaseInputSchemaObject),
    disconnect: joi_1.default.boolean(),
    delete: joi_1.default.boolean(),
    connect: joi_1.default.object().keys(PoolWhereUniqueInput_schema_1.PoolWhereUniqueInputSchemaObject),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(PoolUpdateWithoutPurchaseInput_schema_1.PoolUpdateWithoutPurchaseInputSchemaObject), joi_1.default.object().keys(PoolUncheckedUpdateWithoutPurchaseInput_schema_1.PoolUncheckedUpdateWithoutPurchaseInputSchemaObject))
};
