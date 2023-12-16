"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDayCreateNestedOneWithoutPoolInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const ServiceDayCreateWithoutPoolInput_schema_1 = require("./ServiceDayCreateWithoutPoolInput.schema");
const ServiceDayUncheckedCreateWithoutPoolInput_schema_1 = require("./ServiceDayUncheckedCreateWithoutPoolInput.schema");
const ServiceDayCreateOrConnectWithoutPoolInput_schema_1 = require("./ServiceDayCreateOrConnectWithoutPoolInput.schema");
const ServiceDayWhereUniqueInput_schema_1 = require("./ServiceDayWhereUniqueInput.schema");
exports.ServiceDayCreateNestedOneWithoutPoolInputSchemaObject = {
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(ServiceDayCreateWithoutPoolInput_schema_1.ServiceDayCreateWithoutPoolInputSchemaObject), joi_1.default.object().keys(ServiceDayUncheckedCreateWithoutPoolInput_schema_1.ServiceDayUncheckedCreateWithoutPoolInputSchemaObject)),
    connectOrCreate: joi_1.default.object().keys(ServiceDayCreateOrConnectWithoutPoolInput_schema_1.ServiceDayCreateOrConnectWithoutPoolInputSchemaObject),
    connect: joi_1.default.object().keys(ServiceDayWhereUniqueInput_schema_1.ServiceDayWhereUniqueInputSchemaObject)
};
