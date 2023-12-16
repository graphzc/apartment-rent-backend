// @ts-nocheck
import Joi from 'joi';
import { BookingUncheckedCreateNestedManyWithoutUserInputSchemaObject } from './BookingUncheckedCreateNestedManyWithoutUserInput.schema'

export const UserUncheckedCreateInputSchemaObject = {
    id: Joi.string(),
  email: Joi.string().required(),
  name: Joi.alternatives().try(Joi.string()),
  password: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  booking: Joi.object().keys(BookingUncheckedCreateNestedManyWithoutUserInputSchemaObject)
}