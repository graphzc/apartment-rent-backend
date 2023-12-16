// @ts-nocheck
import Joi from 'joi';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBookingInputSchemaObject } from './UserCreateWithoutBookingInput.schema';
import { UserUncheckedCreateWithoutBookingInputSchemaObject } from './UserUncheckedCreateWithoutBookingInput.schema'

export const UserCreateOrConnectWithoutBookingInputSchemaObject = {
    where: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutBookingInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutBookingInputSchemaObject))
}