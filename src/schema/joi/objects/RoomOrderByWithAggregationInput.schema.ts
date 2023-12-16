// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoomCountOrderByAggregateInputSchemaObject } from './RoomCountOrderByAggregateInput.schema';
import { RoomAvgOrderByAggregateInputSchemaObject } from './RoomAvgOrderByAggregateInput.schema';
import { RoomMaxOrderByAggregateInputSchemaObject } from './RoomMaxOrderByAggregateInput.schema';
import { RoomMinOrderByAggregateInputSchemaObject } from './RoomMinOrderByAggregateInput.schema';
import { RoomSumOrderByAggregateInputSchemaObject } from './RoomSumOrderByAggregateInput.schema'

export const RoomOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  no: SortOrderSchema,
  apartmentId: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  _count: Joi.object().keys(RoomCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(RoomAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(RoomMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(RoomMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(RoomSumOrderByAggregateInputSchemaObject)
}