import Joi from 'joi';
import { RoomUpdateInputSchemaObject, RoomWhereUniqueInputSchemaObject } from './objects'

export const RoomUpdateOneSchema = Joi.object().keys({ data: Joi.object().keys(RoomUpdateInputSchemaObject), where: Joi.object().keys(RoomWhereUniqueInputSchemaObject)  }).required()