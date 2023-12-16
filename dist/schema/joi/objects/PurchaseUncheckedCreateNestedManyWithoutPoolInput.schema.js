"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseUncheckedCreateNestedManyWithoutPoolInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PurchaseCreateWithoutPoolInput_schema_1 = require("./PurchaseCreateWithoutPoolInput.schema");
const PurchaseUncheckedCreateWithoutPoolInput_schema_1 = require("./PurchaseUncheckedCreateWithoutPoolInput.schema");
const PurchaseCreateOrConnectWithoutPoolInput_schema_1 = require("./PurchaseCreateOrConnectWithoutPoolInput.schema");
const PurchaseCreateManyPoolInputEnvelope_schema_1 = require("./PurchaseCreateManyPoolInputEnvelope.schema");
const PurchaseWhereUniqueInput_schema_1 = require("./PurchaseWhereUniqueInput.schema");
exports.PurchaseUncheckedCreateNestedManyWithoutPoolInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseCreateWithoutPoolInput_schema_1.PurchaseCreateWithoutPoolInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseCreateWithoutPoolInput_schema_1.PurchaseCreateWithoutPoolInputSchemaObject)), joi_1.default.object().keys(PurchaseUncheckedCreateWithoutPoolInput_schema_1.PurchaseUncheckedCreateWithoutPoolInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseUncheckedCreateWithoutPoolInput_schema_1.PurchaseUncheckedCreateWithoutPoolInputSchemaObject))),
    connectOrCreate: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseCreateOrConnectWithoutPoolInput_schema_1.PurchaseCreateOrConnectWithoutPoolInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseCreateOrConnectWithoutPoolInput_schema_1.PurchaseCreateOrConnectWithoutPoolInputSchemaObject))),
    createMany: joi_1.default.object().keys(PurchaseCreateManyPoolInputEnvelope_schema_1.PurchaseCreateManyPoolInputEnvelopeSchemaObject),
    connect: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject)))
};
