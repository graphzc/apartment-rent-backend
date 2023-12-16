import Joi from 'joi';
import { PaymentUpdateManyMutationInputSchemaObject, PaymentWhereInputSchemaObject } from './objects'

export const PaymentUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(PaymentUpdateManyMutationInputSchemaObject), where: Joi.object().keys(PaymentWhereInputSchemaObject)  }).required()