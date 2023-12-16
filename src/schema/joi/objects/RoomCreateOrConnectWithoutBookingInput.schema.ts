// @ts-nocheck
import Joi from 'joi';
import { RoomWhereUniqueInputSchemaObject } from './RoomWhereUniqueInput.schema';
import { RoomCreateWithoutBookingInputSchemaObject } from './RoomCreateWithoutBookingInput.schema';
import { RoomUncheckedCreateWithoutBookingInputSchemaObject } from './RoomUncheckedCreateWithoutBookingInput.schema'

export const RoomCreateOrConnectWithoutBookingInputSchemaObject = {
    where: Joi.object().keys(RoomWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(RoomCreateWithoutBookingInputSchemaObject),
Joi.object().keys(RoomUncheckedCreateWithoutBookingInputSchemaObject))
}