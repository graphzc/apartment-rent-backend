// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutBookingInputSchemaObject } from './UserCreateWithoutBookingInput.schema';
import { UserUncheckedCreateWithoutBookingInputSchemaObject } from './UserUncheckedCreateWithoutBookingInput.schema';
import { UserCreateOrConnectWithoutBookingInputSchemaObject } from './UserCreateOrConnectWithoutBookingInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema'

export const UserCreateNestedOneWithoutBookingInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutBookingInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutBookingInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutBookingInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject)
}