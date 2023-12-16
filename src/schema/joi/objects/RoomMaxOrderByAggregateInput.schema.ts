// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const RoomMaxOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  no: SortOrderSchema,
  apartmentId: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema
}