// @ts-nocheck
import Joi from 'joi';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';
import { NestedEnumPaymentStatusFilterSchemaObject } from './NestedEnumPaymentStatusFilter.schema'

export const NestedEnumPaymentStatusWithAggregatesFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.link('#NestedEnumPaymentStatusWithAggregatesFilter')),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedEnumPaymentStatusFilterSchemaObject),
  _max: Joi.object().keys(NestedEnumPaymentStatusFilterSchemaObject)
}