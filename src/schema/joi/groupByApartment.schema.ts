import Joi from 'joi';
import { ApartmentWhereInputSchemaObject, ApartmentOrderByWithAggregationInputSchemaObject, ApartmentScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { ApartmentScalarFieldEnumSchema } from './enums'

export const ApartmentGroupBySchema = Joi.object().keys({ where: Joi.object().keys(ApartmentWhereInputSchemaObject), orderBy: Joi.object().keys(ApartmentOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(ApartmentScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(ApartmentScalarFieldEnumSchema).required()  }).required()