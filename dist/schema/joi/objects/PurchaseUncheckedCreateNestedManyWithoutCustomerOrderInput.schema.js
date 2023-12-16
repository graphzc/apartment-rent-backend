"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseUncheckedCreateNestedManyWithoutCustomerOrderInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const PurchaseCreateWithoutCustomerOrderInput_schema_1 = require("./PurchaseCreateWithoutCustomerOrderInput.schema");
const PurchaseUncheckedCreateWithoutCustomerOrderInput_schema_1 = require("./PurchaseUncheckedCreateWithoutCustomerOrderInput.schema");
const PurchaseCreateOrConnectWithoutCustomerOrderInput_schema_1 = require("./PurchaseCreateOrConnectWithoutCustomerOrderInput.schema");
const PurchaseCreateManyCustomerOrderInputEnvelope_schema_1 = require("./PurchaseCreateManyCustomerOrderInputEnvelope.schema");
const PurchaseWhereUniqueInput_schema_1 = require("./PurchaseWhereUniqueInput.schema");
exports.PurchaseUncheckedCreateNestedManyWithoutCustomerOrderInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseCreateWithoutCustomerOrderInput_schema_1.PurchaseCreateWithoutCustomerOrderInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseCreateWithoutCustomerOrderInput_schema_1.PurchaseCreateWithoutCustomerOrderInputSchemaObject)), joi_1.default.object().keys(PurchaseUncheckedCreateWithoutCustomerOrderInput_schema_1.PurchaseUncheckedCreateWithoutCustomerOrderInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseUncheckedCreateWithoutCustomerOrderInput_schema_1.PurchaseUncheckedCreateWithoutCustomerOrderInputSchemaObject))),
    connectOrCreate: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseCreateOrConnectWithoutCustomerOrderInput_schema_1.PurchaseCreateOrConnectWithoutCustomerOrderInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseCreateOrConnectWithoutCustomerOrderInput_schema_1.PurchaseCreateOrConnectWithoutCustomerOrderInputSchemaObject))),
    createMany: joi_1.default.object().keys(PurchaseCreateManyCustomerOrderInputEnvelope_schema_1.PurchaseCreateManyCustomerOrderInputEnvelopeSchemaObject),
    connect: joi_1.default.alternatives().try(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject), joi_1.default.array().items(joi_1.default.object().keys(PurchaseWhereUniqueInput_schema_1.PurchaseWhereUniqueInputSchemaObject)))
};
