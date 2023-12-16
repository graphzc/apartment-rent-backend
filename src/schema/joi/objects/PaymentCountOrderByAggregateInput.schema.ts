// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema'

export const PaymentCountOrderByAggregateInputSchemaObject = {
    id: SortOrderSchema,
  bookingId: SortOrderSchema,
  amount: SortOrderSchema,
  slip: SortOrderSchema,
  status: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema
}