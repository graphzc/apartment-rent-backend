"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderUpsertWithoutPurchaseInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerOrderUpdateWithoutPurchaseInput_schema_1 = require("./CustomerOrderUpdateWithoutPurchaseInput.schema");
const CustomerOrderUncheckedUpdateWithoutPurchaseInput_schema_1 = require("./CustomerOrderUncheckedUpdateWithoutPurchaseInput.schema");
const CustomerOrderCreateWithoutPurchaseInput_schema_1 = require("./CustomerOrderCreateWithoutPurchaseInput.schema");
const CustomerOrderUncheckedCreateWithoutPurchaseInput_schema_1 = require("./CustomerOrderUncheckedCreateWithoutPurchaseInput.schema");
exports.CustomerOrderUpsertWithoutPurchaseInputSchemaObject = {
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderUpdateWithoutPurchaseInput_schema_1.CustomerOrderUpdateWithoutPurchaseInputSchemaObject), joi_1.default.object().keys(CustomerOrderUncheckedUpdateWithoutPurchaseInput_schema_1.CustomerOrderUncheckedUpdateWithoutPurchaseInputSchemaObject)),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderCreateWithoutPurchaseInput_schema_1.CustomerOrderCreateWithoutPurchaseInputSchemaObject), joi_1.default.object().keys(CustomerOrderUncheckedCreateWithoutPurchaseInput_schema_1.CustomerOrderUncheckedCreateWithoutPurchaseInputSchemaObject))
};
