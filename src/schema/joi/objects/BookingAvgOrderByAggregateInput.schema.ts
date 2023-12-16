// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const BookingAvgOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  roomId: SortOrderSchema,
  duration: SortOrderSchema
}