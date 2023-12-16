// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { StringNullableFilterSchemaObject } from './StringNullableFilter.schema';
import { EnumPaymentStatusFilterSchemaObject } from './EnumPaymentStatusFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { BookingRelationFilterSchemaObject } from './BookingRelationFilter.schema';
import { BookingWhereInputSchemaObject } from './BookingWhereInput.schema'

export const PaymentWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#PaymentWhereInput'),
Joi.array().items(Joi.link('#PaymentWhereInput'))),
  OR: Joi.array().items(Joi.link('#PaymentWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#PaymentWhereInput'),
Joi.array().items(Joi.link('#PaymentWhereInput'))),
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
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  booking: Joi.alternatives().try(Joi.object().keys(BookingRelationFilterSchemaObject),
Joi.object().keys(BookingWhereInputSchemaObject))
}