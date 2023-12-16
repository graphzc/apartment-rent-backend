// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const PaymentSumOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  bookingId: SortOrderSchema,
  amount: SortOrderSchema
}