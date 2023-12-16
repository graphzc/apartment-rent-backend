import Joi from 'joi';
import { PaymentWhereInputSchemaObject, PaymentOrderByWithAggregationInputSchemaObject, PaymentScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { PaymentScalarFieldEnumSchema } from './enums'

export const PaymentGroupBySchema = Joi.object().keys({ where: Joi.object().keys(PaymentWhereInputSchemaObject), orderBy: Joi.object().keys(PaymentOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(PaymentScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(PaymentScalarFieldEnumSchema).required()  }).required()