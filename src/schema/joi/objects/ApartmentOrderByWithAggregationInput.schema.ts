// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ApartmentCountOrderByAggregateInputSchemaObject } from './ApartmentCountOrderByAggregateInput.schema';
import { ApartmentAvgOrderByAggregateInputSchemaObject } from './ApartmentAvgOrderByAggregateInput.schema';
import { ApartmentMaxOrderByAggregateInputSchemaObject } from './ApartmentMaxOrderByAggregateInput.schema';
import { ApartmentMinOrderByAggregateInputSchemaObject } from './ApartmentMinOrderByAggregateInput.schema';
import { ApartmentSumOrderByAggregateInputSchemaObject } from './ApartmentSumOrderByAggregateInput.schema'

export const ApartmentOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  name: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  _count: Joi.object().keys(ApartmentCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(ApartmentAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(ApartmentMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(ApartmentMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(ApartmentSumOrderByAggregateInputSchemaObject)
}