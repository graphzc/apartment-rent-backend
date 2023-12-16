import Joi from 'joi';
import { ApartmentWhereInputSchemaObject, ApartmentOrderByWithRelationInputSchemaObject, ApartmentWhereUniqueInputSchemaObject } from './objects';
import { ApartmentScalarFieldEnumSchema } from './enums'

export const ApartmentFindFirstSchema = Joi.object().keys({ where: Joi.object().keys(ApartmentWhereInputSchemaObject), orderBy: Joi.object().keys(ApartmentOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(ApartmentWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(ApartmentScalarFieldEnumSchema) }).required()