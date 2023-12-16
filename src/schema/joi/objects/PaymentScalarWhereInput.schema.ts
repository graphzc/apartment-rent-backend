// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';
import { EnumPaymentStatusFilterSchemaObject } from './EnumPaymentStatusFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema'

export const PaymentScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#PaymentScalarWhereInput'),
Joi.array().items(Joi.link('#PaymentScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#PaymentScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#PaymentScalarWhereInput'),
Joi.array().items(Joi.link('#PaymentScalarWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  bookingId: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  amount: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  slip: Joi.alternatives().try(Joi.object().keys(StringNullableFilterSchemaObject),
Joi.string()),
  status: Joi.alternatives().try(Joi.object().keys(EnumPaymentStatusFilterSchemaObject)),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject))
}