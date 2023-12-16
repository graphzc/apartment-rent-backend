import Joi from 'joi';

export const BookingScalarFieldEnumSchema = Joi.string().valid(...["id","roomId","userId","startDate","endDate","duration","createdAt","updatedAt"])