"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseCreateOrConnectWithoutPoolInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PurchaseWhereUniqueInput_schema_1 = require("./PurchaseWhereUniqueInput.schema");
const PurchaseCreateWithoutPoolInput_schema_1 = require("./PurchaseCreateWithoutPoolInput.schema");
const PurchaseUncheckedCreateWithoutPoolInput_schema_1 = require("./PurchaseUncheckedCreateWithoutPoolInput.schema");
exports.PurchaseCreateOrConnectWithoutPoolInputSchemaObject = {
    where: joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseCreateWithoutPoolInput_schema_1.PurchaseCreateWithoutPoolInputSchemaObject), joi_1.default.object().keys(PurchaseUncheckedCreateWithoutPoolInput_schema_1.PurchaseUncheckedCreateWithoutPoolInputSchemaObject))
};
