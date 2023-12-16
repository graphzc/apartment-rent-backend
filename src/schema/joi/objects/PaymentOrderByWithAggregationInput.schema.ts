// @ts-nocheck
import Joi from 'joi';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputSchemaObject } from './SortOrderInput.schema';
import { PaymentCountOrderByAggregateInputSchemaObject } from './PaymentCountOrderByAggregateInput.schema';
import { PaymentAvgOrderByAggregateInputSchemaObject } from './PaymentAvgOrderByAggregateInput.schema';
import { PaymentMaxOrderByAggregateInputSchemaObject } from './PaymentMaxOrderByAggregateInput.schema';
import { PaymentMinOrderByAggregateInputSchemaObject } from './PaymentMinOrderByAggregateInput.schema';
import { PaymentSumOrderByAggregateInputSchemaObject } from './PaymentSumOrderByAggregateInput.schema'

export const PaymentOrderByWithAggregationInputSchemaObject = {
    id: SortOrderSchema,
  bookingId: SortOrderSchema,
  amount: SortOrderSchema,
  slip: Joi.alternatives().try(SortOrderSchema,
Joi.object().keys(SortOrderInputSchemaObject)),
  status: SortOrderSchema,
  createdAt: SortOrderSchema,
  updatedAt: SortOrderSchema,
  _count: Joi.object().keys(PaymentCountOrderByAggregateInputSchemaObject),
  _avg: Joi.object().keys(PaymentAvgOrderByAggregateInputSchemaObject),
  _max: Joi.object().keys(PaymentMaxOrderByAggregateInputSchemaObject),
  _min: Joi.object().keys(PaymentMinOrderByAggregateInputSchemaObject),
  _sum: Joi.object().keys(PaymentSumOrderByAggregateInputSchemaObject)
}