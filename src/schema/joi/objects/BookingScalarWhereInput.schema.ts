// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema'

export const BookingScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#BookingScalarWhereInput'),
Joi.array().items(Joi.link('#BookingScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#BookingScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#BookingScalarWhereInput'),
Joi.array().items(Joi.link('#BookingScalarWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  roomId: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  userId: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  startDate: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  endDate: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  duration: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject))
}