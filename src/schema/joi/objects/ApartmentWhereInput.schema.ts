// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { RoomListRelationFilterSchemaObject } from './RoomListRelationFilter.schema'

export const ApartmentWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#ApartmentWhereInput'),
Joi.array().items(Joi.link('#ApartmentWhereInput'))),
  OR: Joi.array().items(Joi.link('#ApartmentWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#ApartmentWhereInput'),
Joi.array().items(Joi.link('#ApartmentWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  name: Joi.alternatives().try(Joi.object().keys(StringFilterSchemaObject),
Joi.string()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  room: Joi.object().keys(RoomListRelationFilterSchemaObject)
}