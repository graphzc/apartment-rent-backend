// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const RoomCountOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  no: SortOrderSchema,
  apartmentId: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema
}