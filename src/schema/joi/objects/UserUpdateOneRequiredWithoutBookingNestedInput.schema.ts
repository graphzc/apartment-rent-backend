// @ts-nocheck
import Joi from 'joi';
import { UserCreateWithoutBookingInputSchemaObject } from './UserCreateWithoutBookingInput.schema';
import { UserUncheckedCreateWithoutBookingInputSchemaObject } from './UserUncheckedCreateWithoutBookingInput.schema';
import { UserCreateOrConnectWithoutBookingInputSchemaObject } from './UserCreateOrConnectWithoutBookingInput.schema';
import { UserUpsertWithoutBookingInputSchemaObject } from './UserUpsertWithoutBookingInput.schema';
import { UserWhereUniqueInputSchemaObject } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutBookingInputSchemaObject } from './UserUpdateWithoutBookingInput.schema';
import { UserUncheckedUpdateWithoutBookingInputSchemaObject } from './UserUncheckedUpdateWithoutBookingInput.schema'

export const UserUpdateOneRequiredWithoutBookingNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(UserCreateWithoutBookingInputSchemaObject),
Joi.object().keys(UserUncheckedCreateWithoutBookingInputSchemaObject)),
  connectOrCreate: Joi.object().keys(UserCreateOrConnectWithoutBookingInputSchemaObject),
  upsert: Joi.object().keys(UserUpsertWithoutBookingInputSchemaObject),
  connect: Joi.object().keys(UserWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(UserUpdateWithoutBookingInputSchemaObject),
Joi.object().keys(UserUncheckedUpdateWithoutBookingInputSchemaObject))
}