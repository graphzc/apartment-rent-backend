import Joi from 'joi';
import { RoomWhereInputSchemaObject, RoomOrderByWithAggregationInputSchemaObject, RoomScalarWhereWithAggregatesInputSchemaObject } from './objects';
import { RoomScalarFieldEnumSchema } from './enums'

export const RoomGroupBySchema = Joi.object().keys({ where: Joi.object().keys(RoomWhereInputSchemaObject), orderBy: Joi.object().keys(RoomOrderByWithAggregationInputSchemaObject), having: Joi.object().keys(RoomScalarWhereWithAggregatesInputSchemaObject), take: Joi.number(), skip: Joi.number(), by: Joi.array().items(RoomScalarFieldEnumSchema).required()  }).required()