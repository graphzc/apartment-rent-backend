import Joi from 'joi';
import { PaymentWhereUniqueInputSchemaObject, PaymentCreateInputSchemaObject, PaymentUpdateInputSchemaObject } from './objects'

export const PaymentUpsertSchema = Joi.object().keys({ where: Joi.object().keys(PaymentWhereUniqueInputSchemaObject), data: Joi.object().keys(PaymentCreateInputSchemaObject), update: Joi.object().keys(PaymentUpdateInputSchemaObject)  }).required()