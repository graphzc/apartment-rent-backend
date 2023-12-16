import Joi from 'joi';
import { RoomUpdateManyMutationInputSchemaObject, RoomWhereInputSchemaObject } from './objects'

export const RoomUpdateManySchema = Joi.object().keys({ data: Joi.object().keys(RoomUpdateManyMutationInputSchemaObject), where: Joi.object().keys(RoomWhereInputSchemaObject)  }).required()