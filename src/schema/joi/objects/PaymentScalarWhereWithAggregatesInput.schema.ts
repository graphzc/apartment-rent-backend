// @ts-nocheck
import Joi from 'joi';
import { IntWithAggregatesFilterSchemaObject } from './IntWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterSchemaObject } from './StringNullableWithAggregatesFilter.schema';
import { EnumPaymentStatusWithAggregatesFilterSchemaObject } from './EnumPaymentStatusWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterSchemaObject } from './DateTimeWithAggregatesFilter.schema'

export const PaymentScalarWhereWithAggregatesInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#PaymentScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#PaymentScalarWhereWithAggregatesInput'))),
  OR: Joi.array().items(Joi.link('#PaymentScalarWhereWithAggregatesInput')),
  NOT: Joi.alternatives().try(Joi.link('#PaymentScalarWhereWithAggregatesInput'),
Joi.array().items(Joi.link('#PaymentScalarWhereWithAggregatesInput'))),
  id: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number()),
  bookingId: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number()),
  amount: Joi.alternatives().try(Joi.object().keys(IntWithAggregatesFilterSchemaObject),
Joi.number()),
  slip: Joi.alternatives().try(Joi.object().keys(StringNullableWithAggregatesFilterSchemaObject),
Joi.string()),
  status: Joi.alternatives().try(Joi.object().keys(EnumPaymentStatusWithAggregatesFilterSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeWithAggregatesFilterSchemaObject))
}