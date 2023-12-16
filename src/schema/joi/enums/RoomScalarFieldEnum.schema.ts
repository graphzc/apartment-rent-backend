import Joi from 'joi';

export const RoomScalarFieldEnumSchema = Joi.string().valid(...["id","no","apartmentId","createdAt","updatedAt"])