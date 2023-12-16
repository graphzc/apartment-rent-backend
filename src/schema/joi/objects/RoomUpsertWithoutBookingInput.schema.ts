// @ts-nocheck
import Joi from 'joi';
import { RoomUpdateWithoutBookingInputSchemaObject } from './RoomUpdateWithoutBookingInput.schema';
import { RoomUncheckedUpdateWithoutBookingInputSchemaObject } from './RoomUncheckedUpdateWithoutBookingInput.schema';
import { RoomCreateWithoutBookingInputSchemaObject } from './RoomCreateWithoutBookingInput.schema';
import { RoomUncheckedCreateWithoutBookingInputSchemaObject } from './RoomUncheckedCreateWithoutBookingInput.schema'

export const RoomUpsertWithoutBookingInputSchemaObject = {
    update: Joi.alternatives().try(Joi.object().keys(RoomUpdateWithoutBookingInputSchemaObject),
Joi.object().keys(RoomUncheckedUpdateWithoutBookingInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(RoomCreateWithoutBookingInputSchemaObject),
Joi.object().keys(RoomUncheckedCreateWithoutBookingInputSchemaObject))
}