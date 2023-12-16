"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDayCreateOrConnectWithoutPoolInputSchemaObject = void 0;
// @ts-nocheck
const joi_1 = __importDefault(require("joi"));
const ServiceDayWhereUniqueInput_schema_1 = require("./ServiceDayWhereUniqueInput.schema");
const ServiceDayCreateWithoutPoolInput_schema_1 = require("./ServiceDayCreateWithoutPoolInput.schema");
const ServiceDayUncheckedCreateWithoutPoolInput_schema_1 = require("./ServiceDayUncheckedCreateWithoutPoolInput.schema");
exports.ServiceDayCreateOrConnectWithoutPoolInputSchemaObject = {
    where: joi_1.default.object().keys(ServiceDayWhereUniqueInput_schema_1.ServiceDayWhereUniqueInputSchemaObject),
    create: joi_1.default.alternatives().try(joi_1.default.object().keys(ServiceDayCreateWithoutPoolInput_schema_1.ServiceDayCreateWithoutPoolInputSchemaObject), joi_1.default.object().keys(ServiceDayUncheckedCreateWithoutPoolInput_schema_1.ServiceDayUncheckedCreateWithoutPoolInputSchemaObject))
};
