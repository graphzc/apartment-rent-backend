// @ts-nocheck
import Joi from 'joi';
import { NestedEnumPaymentStatusFilterSchemaObject } from './NestedEnumPaymentStatusFilter.schema'

export const EnumPaymentStatusFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.object().keys(NestedEnumPaymentStatusFilterSchemaObject))
}