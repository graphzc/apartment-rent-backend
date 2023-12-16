// @ts-nocheck
import Joi from 'joi';
import { UserUpdateWithoutBookingInputSchemaObject } from './UserUpdateWithoutBookingInput.schema';
import { UserUncheckedUpdateWithoutBookingInputSchemaObject } from './UserUncheckedUpdateWithoutBookingInput.schema';
import { UserCreateWithoutBookingInputSchemaObject } from './UserCreateWithoutBookingInput.schema';
import { UserUncheckedCreateWithoutBookingInputSchemaObject } from './UserUncheckedCreateWithoutBookingInput.schema'

export const UserUpsertWithoutBookingInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutBookingInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutBookingInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutBookingInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutBookingInputSchemaObject))
}