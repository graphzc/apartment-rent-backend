// @ts-nocheck
import Joi from 'joi';
import { RoomCreateWithoutBookingInputSchemaObject } from './RoomCreateWithoutBookingInput.schema';
import { RoomUncheckedCreateWithoutBookingInputSchemaObject } from './RoomUncheckedCreateWithoutBookingInput.schema';
import { RoomCreateOrConnectWithoutBookingInputSchemaObject } from './RoomCreateOrConnectWithoutBookingInput.schema';
import { RoomWhereUniqueInputSchemaObject } from './RoomWhereUniqueInput.schema'

export const RoomCreateNestedOneWithoutBookingInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RoomCreateWithoutBookingInputSchemaObject),
Joi.object().keys(RoomUncheckedCreateWithoutBookingInputSchemaObject)),
  connectOrCreate: Joi.object().keys(RoomCreateOrConnectWithoutBookingInputSchemaObject),
  connect: Joi.object().keys(RoomWhereUniqueInputSchemaObject)
}