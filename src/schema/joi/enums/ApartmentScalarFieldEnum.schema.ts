import Joi from 'joi';

export const ApartmentScalarFieldEnumSchema = Joi.string().valid(...["id","name","createdAt","updatedAt"])