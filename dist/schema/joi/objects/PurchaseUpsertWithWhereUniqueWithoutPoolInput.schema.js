"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseUpsertWithWhereUniqueWithoutPoolInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PurchaseWhereUniqueInput_schema_1 = require("./PurchaseWhereUniqueInput.schema");
const PurchaseUpdateWithoutPoolInput_schema_1 = require("./PurchaseUpdateWithoutPoolInput.schema");
const PurchaseUncheckedUpdateWithoutPoolInput_schema_1 = require("./PurchaseUncheckedUpdateWithoutPoolInput.schema");
const PurchaseCreateWithoutPoolInput_schema_1 = require("./PurchaseCreateWithoutPoolInput.schema");
const PurchaseUncheckedCreateWithoutPoolInput_schema_1 = require("./PurchaseUncheckedCreateWithoutPoolInput.schema");
exports.PurchaseUpsertWithWhereUniqueWithoutPoolInputSchemaObject = {
    where: joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject),
    update: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseUpdateWithoutPoolInput_schema_1.PurchaseUpdateWithoutPoolInputSchemaObject), joi_1.default.object().keys(PurchaseUncheckedUpdateWithoutPoolInput_schema_1.PurchaseUncheckedUpdateWithoutPoolInputSchemaObject)),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseCreateWithoutPoolInput_schema_1.PurchaseCreateWithoutPoolInputSchemaObject), joi_1.default.object().keys(PurchaseUncheckedCreateWithoutPoolInput_schema_1.PurchaseUncheckedCreateWithoutPoolInputSchemaObject))
};
