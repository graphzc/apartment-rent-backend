import Joi from 'joi';
import { PaymentWhereInputSchemaObject, PaymentOrderByWithRelationInputSchemaObject, PaymentWhereUniqueInputSchemaObject } from './objects'

export const PaymentAggregateSchema = Joi.object().keys({ where: Joi.object().keys(PaymentWhereInputSchemaObject), orderBy: Joi.object().keys(PaymentOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(PaymentWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()