// @ts-nocheck
import Joi from 'joi';


export const BookingCreateManyRoomInputSchemaObject = {
    id: Joi.number(),
  userId: Joi.string().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  duration: Joi.number().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
}