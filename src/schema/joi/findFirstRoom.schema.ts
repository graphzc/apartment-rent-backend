import Joi from 'joi';
import { RoomWhereInputSchemaObject, RoomOrderByWithRelationInputSchemaObject, RoomWhereUniqueInputSchemaObject } from './objects';
import { RoomScalarFieldEnumSchema } from './enums'

export const RoomFindFirstSchema = Joi.object().keys({ where: Joi.object().keys(RoomWhereInputSchemaObject), orderBy: Joi.object().keys(RoomOrderByWithRelationInputSchemaObject), cursor: Joi.object().keys(RoomWhereUniqueInputSchemaObject), take: Joi.number(), skip: Joi.number(), distinct: Joi.array().items(RoomScalarFieldEnumSchema) }).required()