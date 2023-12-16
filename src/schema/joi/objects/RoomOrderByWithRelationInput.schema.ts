// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ApartmentOrderByWithRelationInputSchemaObject } from './ApartmentOrderByWithRelationInput.schema';
import { BookingOrderByRelationAggregateInputSchemaObject } from './BookingOrderByRelationAggregateInput.schema'

export const RoomOrderByWithRelationInputSchemaObject = {
    id: SortOrderSchema,
  no: SortOrderSchema,
  apartmentId: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  apartment: Joi.object().keys(ApartmentOrderByWithRelationInputSchemaObject),
  booking: Joi.object().keys(BookingOrderByRelationAggregateInputSchemaObject)
}