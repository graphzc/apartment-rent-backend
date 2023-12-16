// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { ApartmentRelationFilterSchemaObject } from './ApartmentRelationFilter.schema';
import { ApartmentWhereInputSchemaObject } from './ApartmentWhereInput.schema';
import { BookingListRelationFilterSchemaObject } from './BookingListRelationFilter.schema'

export const RoomWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#RoomWhereInput'),
Joi.array().items(Joi.link('#RoomWhereInput'))),
  OR: Joi.array().items(Joi.link('#RoomWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#RoomWhereInput'),
Joi.array().items(Joi.link('#RoomWhereInput'))),
  id: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  no: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  apartmentId: Joi.alternatives().try(Joi.object().keys(IntFilterSchemaObject),
Joi.number()),
  createdAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  apartment: Joi.alternatives().try(Joi.object().keys(ApartmentRelationFilterSchemaObject),
Joi.object().keys(ApartmentWhereInputSchemaObject)),
  booking: Joi.object().keys(BookingListRelationFilterSchemaObject)
}