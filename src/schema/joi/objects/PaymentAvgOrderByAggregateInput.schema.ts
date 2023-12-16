// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const PaymentAvgOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  bookingId: SortOrderSchema,
  amount: SortOrderSchema
}