import Joi from 'joi';
import { ApartmentWhereInputSchemaObject, ApartmentOrderByWithRelationInputSchemaObject, ApartmentWhereUniqueInputSchemaObject } from './objects'

export const ApartmentAggregateSchema = Joi.object().keys({ where: Joi.object().keys(ApartmentWhereInputSchemaObject), orderBy: Joi.object().keys(ApartmentOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(ApartmentWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number()  }).required()