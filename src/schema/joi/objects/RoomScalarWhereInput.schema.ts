// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema'

export const RoomScalarWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#RoomScalarWhereInput'),
Joi.array().items(Joi.link('#RoomScalarWhereInput'))),
  OR: Joi.array().items(Joi.link('#RoomScalarWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#RoomScalarWhereInput'),
Joi.array().items(Joi.link('#RoomScalarWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  no: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  apartmentId: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject))
}