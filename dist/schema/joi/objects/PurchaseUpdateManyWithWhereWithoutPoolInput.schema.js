"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseUpdateManyWithWhereWithoutPoolInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PurchaseScalarWhereInput_schema_1 = require("./PurchaseScalarWhereInput.schema");
const PurchaseUpdateManyMutationInput_schema_1 = require("./PurchaseUpdateManyMutationInput.schema");
const PurchaseUncheckedUpdateManyWithoutPurchaseInput_schema_1 = require("./PurchaseUncheckedUpdateManyWithoutPurchaseInput.schema");
exports.PurchaseUpdateManyWithWhereWithoutPoolInputSchemaObject = {
    where: joi_1.default.object().keys(PurchaseScalarWhereInput_schema_1.PurchaseScalarWhereInputSchemaObject),
    data: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseUpdateManyMutationInput_schema_1.PurchaseUpdateManyMutationInputSchemaObject), joi_1.default.object().keys(PurchaseUncheckedUpdateManyWithoutPurchaseInput_schema_1.PurchaseUncheckedUpdateManyWithoutPurchaseInputSchemaObject))
};
