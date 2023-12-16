// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { BookingOrderByWithRelationInputSchemaObject } from './BookingOrderByWithRelationInput.schema'

export const PaymentOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  bookingId: SortOrderSchema,
  amount: SortOrderSchema,
  slip: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  status: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  booking: Joi.object().keys(BookingOrderByWithRelationInputSchemaObject)
}