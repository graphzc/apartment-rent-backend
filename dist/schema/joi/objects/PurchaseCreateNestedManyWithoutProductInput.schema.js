"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseCreateNestedManyWithoutProductInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PurchaseCreateWithoutProductInput_schema_1 = require("./PurchaseCreateWithoutProductInput.schema");
const PurchaseUncheckedCreateWithoutProductInput_schema_1 = require("./PurchaseUncheckedCreateWithoutProductInput.schema");
const PurchaseCreateOrConnectWithoutProductInput_schema_1 = require("./PurchaseCreateOrConnectWithoutProductInput.schema");
const PurchaseCreateManyProductInputEnvelope_schema_1 = require("./PurchaseCreateManyProductInputEnvelope.schema");
const PurchaseWhereUniqueInput_schema_1 = require("./PurchaseWhereUniqueInput.schema");
exports.PurchaseCreateNestedManyWithoutProductInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseCreateWithoutProductInput_schema_1.PurchaseCreateWithoutProductInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseCreateWithoutProductInput_schema_1.PurchaseCreateWithoutProductInputSchemaObject)), joi_1.default.object().keys(PurchaseUncheckedCreateWithoutProductInput_schema_1.PurchaseUncheckedCreateWithoutProductInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseUncheckedCreateWithoutProductInput_schema_1.PurchaseUncheckedCreateWithoutProductInputSchemaObject))),
    connectOrCreate: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseCreateOrConnectWithoutProductInput_schema_1.PurchaseCreateOrConnectWithoutProductInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseCreateOrConnectWithoutProductInput_schema_1.PurchaseCreateOrConnectWithoutProductInputSchemaObject))),
    createMany: joi_1.default.object().keys(PurchaseCreateManyProductInputEnvelope_schema_1.PurchaseCreateManyProductInputEnvelopeSchemaObject),
    connect: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject)))
};
