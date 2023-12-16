// @ts-nocheck
import Joi from 'joi';


export const BookingCreateManyUserInputSchemaObject = {
    id: Joi.number(),
  roomId: Joi.number().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  duration: Joi.number().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
}