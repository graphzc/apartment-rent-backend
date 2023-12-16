"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderCreateOrConnectWithoutPurchaseInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerOrderWhereUniqueInput_schema_1 = require("./CustomerOrderWhereUniqueInput.schema");
const CustomerOrderCreateWithoutPurchaseInput_schema_1 = require("./CustomerOrderCreateWithoutPurchaseInput.schema");
const CustomerOrderUncheckedCreateWithoutPurchaseInput_schema_1 = require("./CustomerOrderUncheckedCreateWithoutPurchaseInput.schema");
exports.CustomerOrderCreateOrConnectWithoutPurchaseInputSchemaObject = {
    where: joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderCreateWithoutPurchaseInput_schema_1.CustomerOrderCreateWithoutPurchaseInputSchemaObject), joi_1.default.object().keys(CustomerOrderUncheckedCreateWithoutPurchaseInput_schema_1.CustomerOrderUncheckedCreateWithoutPurchaseInputSchemaObject))
};
