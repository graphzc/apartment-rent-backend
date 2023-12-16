// @ts-nocheck
import Joi from 'joi';
import { IntFilterSchemaObject } from './IntFilter.schema';
import { StringFilterSchemaObject } from './StringFilter.schema';
import { DateTimeFilterSchemaObject } from './DateTimeFilter.schema';
import { RoomRelationFilterSchemaObject } from './RoomRelationFilter.schema';
import { RoomWhereInputSchemaObject } from './RoomWhereInput.schema';
import { UserRelationFilterSchemaObject } from './UserRelationFilter.schema';
import { UserWhereInputSchemaObject } from './UserWhereInput.schema';
import { PaymentListRelationFilterSchemaObject } from './PaymentListRelationFilter.schema'

export const BookingWhereInputSchemaObject = {
    AND: Joi.alternatives().try(Joi.link('#BookingWhereInput'),
Joi.array().items(Joi.link('#BookingWhereInput'))),
  OR: Joi.array().items(Joi.link('#BookingWhereInput')),
  NOT: Joi.alternatives().try(Joi.link('#BookingWhereInput'),
Joi.array().items(Joi.link('#BookingWhereInput'))),
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
  updatedAt: Joi.alternatives().try(Joi.object().keys(DateTimeFilterSchemaObject)),
  room: Joi.alternatives().try(Joi.object().keys(RoomRelationFilterSchemaObject),
Joi.object().keys(RoomWhereInputSchemaObject)),
  user: Joi.alternatives().try(Joi.object().keys(UserRelationFilterSchemaObject),
Joi.object().keys(UserWhereInputSchemaObject)),
  payment: Joi.object().keys(PaymentListRelationFilterSchemaObject)
}