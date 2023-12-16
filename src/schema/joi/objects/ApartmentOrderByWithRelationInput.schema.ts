// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoomOrderByRelationAggregateInputSchemaObject } from './RoomOrderByRelationAggregateInput.schema'

export const ApartmentOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  name: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  room: Joi.object().keys(RoomOrderByRelationAggregateInputSchemaObject)
}