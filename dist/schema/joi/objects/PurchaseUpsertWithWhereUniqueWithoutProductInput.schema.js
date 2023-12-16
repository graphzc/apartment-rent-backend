"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseUpsertWithWhereUniqueWithoutProductInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PurchaseWhereUniqueInput_schema_1 = require("./PurchaseWhereUniqueInput.schema");
const PurchaseUpdateWithoutProductInput_schema_1 = require("./PurchaseUpdateWithoutProductInput.schema");
const PurchaseUncheckedUpdateWithoutProductInput_schema_1 = require("./PurchaseUncheckedUpdateWithoutProductInput.schema");
const PurchaseCreateWithoutProductInput_schema_1 = require("./PurchaseCreateWithoutProductInput.schema");
const PurchaseUncheckedCreateWithoutProductInput_schema_1 = require("./PurchaseUncheckedCreateWithoutProductInput.schema");
exports.PurchaseUpsertWithWhereUniqueWithoutProductInputSchemaObject = {
    where: joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseUpdateWithoutProductInput_schema_1.PurchaseUpdateWithoutProductInputSchemaObject), joi_1.default.object().keys(PurchaseUncheckedUpdateWithoutProductInput_schema_1.PurchaseUncheckedUpdateWithoutProductInputSchemaObject)),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseCreateWithoutProductInput_schema_1.PurchaseCreateWithoutProductInputSchemaObject), joi_1.default.object().keys(PurchaseUncheckedCreateWithoutProductInput_schema_1.PurchaseUncheckedCreateWithoutProductInputSchemaObject))
};
