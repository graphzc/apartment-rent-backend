// @ts-nocheck
import Joi from 'joi';
import { RoomCreateWithoutBookingInputSchemaObject } from './RoomCreateWithoutBookingInput.schema';
import { RoomUncheckedCreateWithoutBookingInputSchemaObject } from './RoomUncheckedCreateWithoutBookingInput.schema';
import { RoomCreateOrConnectWithoutBookingInputSchemaObject } from './RoomCreateOrConnectWithoutBookingInput.schema';
import { RoomUpsertWithoutBookingInputSchemaObject } from './RoomUpsertWithoutBookingInput.schema';
import { RoomWhereUniqueInputSchemaObject } from './RoomWhereUniqueInput.schema';
import { RoomUpdateWithoutBookingInputSchemaObject } from './RoomUpdateWithoutBookingInput.schema';
import { RoomUncheckedUpdateWithoutBookingInputSchemaObject } from './RoomUncheckedUpdateWithoutBookingInput.schema'

export const RoomUpdateOneRequiredWithoutBookingNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RoomCreateWithoutBookingInputSchemaObject),
Joi.object().keys(RoomUncheckedCreateWithoutBookingInputSchemaObject)),
  connectOrCreate: Joi.object().keys(RoomCreateOrConnectWithoutBookingInputSchemaObject),
  upsert: Joi.object().keys(RoomUpsertWithoutBookingInputSchemaObject),
  connect: Joi.object().keys(RoomWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(RoomUpdateWithoutBookingInputSchemaObject),
Joi.object().keys(RoomUncheckedUpdateWithoutBookingInputSchemaObject))
}