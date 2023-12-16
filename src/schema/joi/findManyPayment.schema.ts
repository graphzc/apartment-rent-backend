import Joi from 'joi';
import { PaymentWhereInputSchemaObject, PaymentOrderByWithRelationInputSchemaObject, PaymentWhereUniqueInputSchemaObject } from './objects';
import { PaymentScalarFieldEnumSchema } from './enums'

export const PaymentFindManySchema = Joi.object().keys({ where: Joi.object().keys(PaymentWhereInputSchemaObject), orderBy: Joi.object().keys(PaymentOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(PaymentWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(PaymentScalarFieldEnumSchema)  }).required()