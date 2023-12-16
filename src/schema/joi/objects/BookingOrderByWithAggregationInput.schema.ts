// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { BookingCountOrderByAggregateInputSchemaObject } from './BookingCountOrderByAggregateInput.schema';
import { BookingAvgOrderByAggregateInputSchemaObject } from './BookingAvgOrderByAggregateInput.schema';
import { BookingMaxOrderByAggregateInputSchemaObject } from './BookingMaxOrderByAggregateInput.schema';
import { BookingMinOrderByAggregateInputSchemaObject } from './BookingMinOrderByAggregateInput.schema';
import { BookingSumOrderByAggregateInputSchemaObject } from './BookingSumOrderByAggregateInput.schema'

export const BookingOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  roomId: SortOrderSchema,
  userId: SortOrderSchema,
  startDate: SortOrderSchema,
  endDate: SortOrderSchema,
  duration: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  _count: Joi.object().keys(BookingCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(BookingAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(BookingMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(BookingMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(BookingSumOrderByAggregateInputSchemaObject)
}