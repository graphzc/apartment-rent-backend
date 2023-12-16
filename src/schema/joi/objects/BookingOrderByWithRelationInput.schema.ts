// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoomOrderByWithRelationInputSchemaObject } from './RoomOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputSchemaObject } from './UserOrderByWithRelationInput.schema';
import { PaymentOrderByRelationAggregateInputSchemaObject } from './PaymentOrderByRelationAggregateInput.schema'

export const BookingOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  roomId: SortOrderSchema,
  userId: SortOrderSchema,
  startDate: SortOrderSchema,
  endDate: SortOrderSchema,
  duration: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  room: Joi.object().keys(RoomOrderByWithRelationInputSchemaObject),
  user: Joi.object().keys(UserOrderByWithRelationInputSchemaObject),
  payment: Joi.object().keys(PaymentOrderByRelationAggregateInputSchemaObject)
}