"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseUpdateWithWhereUniqueWithoutPoolInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PurchaseWhereUniqueInput_schema_1 = require("./PurchaseWhereUniqueInput.schema");
const PurchaseUpdateWithoutPoolInput_schema_1 = require("./PurchaseUpdateWithoutPoolInput.schema");
const PurchaseUncheckedUpdateWithoutPoolInput_schema_1 = require("./PurchaseUncheckedUpdateWithoutPoolInput.schema");
exports.PurchaseUpdateWithWhereUniqueWithoutPoolInputSchemaObject = {
    where: joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject),
    data: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseUpdateWithoutPoolInput_schema_1.PurchaseUpdateWithoutPoolInputSchemaObject), joi_1.default.object().keys(PurchaseUncheckedUpdateWithoutPoolInput_schema_1.PurchaseUncheckedUpdateWithoutPoolInputSchemaObject))
};
