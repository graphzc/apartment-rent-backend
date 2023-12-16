import Joi from 'joi';
import { PaymentCreateInputSchemaObject } from './objects'

export const PaymentCreateSchema = Joi.object().keys({ data: Joi.object().keys(PaymentCreateInputSchemaObject)  }).required()