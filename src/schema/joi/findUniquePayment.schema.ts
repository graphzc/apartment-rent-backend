import Joi from 'joi';
import { PaymentWhereUniqueInputSchemaObject } from './objects'

export const PaymentFindUniqueSchema = Joi.object().keys({ where: Joi.object().keys(PaymentWhereUniqueInputSchemaObject) }).required()