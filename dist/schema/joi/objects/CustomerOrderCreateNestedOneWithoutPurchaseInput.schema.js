"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerOrderCreateNestedOneWithoutPurchaseInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const CustomerOrderCreateWithoutPurchaseInput_schema_1 = require("./CustomerOrderCreateWithoutPurchaseInput.schema");
const CustomerOrderUncheckedCreateWithoutPurchaseInput_schema_1 = require("./CustomerOrderUncheckedCreateWithoutPurchaseInput.schema");
const CustomerOrderCreateOrConnectWithoutPurchaseInput_schema_1 = require("./CustomerOrderCreateOrConnectWithoutPurchaseInput.schema");
const CustomerOrderWhereUniqueInput_schema_1 = require("./CustomerOrderWhereUniqueInput.schema");
exports.CustomerOrderCreateNestedOneWithoutPurchaseInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(CustomerOrderCreateWithoutPurchaseInput_schema_1.CustomerOrderCreateWithoutPurchaseInputSchemaObject), joi_1.default.object().keys(CustomerOrderUncheckedCreateWithoutPurchaseInput_schema_1.CustomerOrderUncheckedCreateWithoutPurchaseInputSchemaObject)),
    connectOrCreate: joi_1.default.object().keys(CustomerOrderCreateOrConnectWithoutPurchaseInput_schema_1.CustomerOrderCreateOrConnectWithoutPurchaseInputSchemaObject),
    connect: joi_1.default.object().keys(CustomerOrderWhereUniqueInput_schema_1.CustomerOrderWhereUniqueInputSchemaObject)
};
