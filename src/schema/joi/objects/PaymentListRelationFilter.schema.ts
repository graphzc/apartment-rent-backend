// @ts-nocheck
import Joi from 'joi';
import { PaymentWhereInputSchemaObject } from './PaymentWhereInput.schema'

export const PaymentListRelationFilterSchemaObject = {
    every: Joi.object().keys(PaymentWhereInputSchemaObject),
  some: Joi.object().keys(PaymentWhereInputSchemaObject),
  none: Joi.object().keys(PaymentWhereInputSchemaObject)
}