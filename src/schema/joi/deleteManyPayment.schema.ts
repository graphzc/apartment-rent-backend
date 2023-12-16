import Joi from 'joi';
import { PaymentWhereInputSchemaObject } from './objects'

export const PaymentDeleteManySchema = Joi.object().keys({ where: Joi.object().keys(PaymentWhereInputSchemaObject)  }).required()