// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const RoomSumOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  no: SortOrderSchema,
  apartmentId: SortOrderSchema
}