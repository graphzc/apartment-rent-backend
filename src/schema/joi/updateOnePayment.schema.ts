import Joi from 'joi';
import { PaymentUpdateInputSchemaObject, PaymentWhereUniqueInputSchemaObject } from './objects'

export const PaymentUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(PaymentUpdateInputSchemaObject), where: Joi.object().keys(PaymentWhereUniqueInputSchemaObject)  }).required()