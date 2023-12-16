// @ts-nocheck
import Joi from 'joi';
import { NestedEnumPaymentStatusWithAggregatesFilterSchemaObject } from './NestedEnumPaymentStatusWithAggregatesFilter.schema';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';
import { NestedEnumPaymentStatusFilterSchemaObject } from './NestedEnumPaymentStatusFilter.schema'

export const EnumPaymentStatusWithAggregatesFilterSchemaObject = {
    not: Joi.alternatives().try(Joi.object().keys(NestedEnumPaymentStatusWithAggregatesFilterSchemaObject)),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedEnumPaymentStatusFilterSchemaObject),
  _max: Joi.object().keys(NestedEnumPaymentStatusFilterSchemaObject)
}