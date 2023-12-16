import Joi from 'joi';
import { PaymentWhereUniqueInputSchemaObject } from './objects'

export const PaymentDeleteOneSchema = Joi.object().keys({ where: Joi.object().keys(PaymentWhereUniqueInputSchemaObject)  }).required()