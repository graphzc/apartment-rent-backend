// @ts-nocheck
import Joi from 'joi';
import { BookingWhereUniqueInputSchemaObject } from './BookingWhereUniqueInput.schema';
import { BookingCreateWithoutRoomInputSchemaObject } from './BookingCreateWithoutRoomInput.schema';
import { BookingUncheckedCreateWithoutRoomInputSchemaObject } from './BookingUncheckedCreateWithoutRoomInput.schema'

export const BookingCreateOrConnectWithoutRoomInputSchemaObject = {
    where: Joi.object().keys(BookingWhereUniqueInputSchemaObject),
  create: Joi.alternatives().try(Joi.object().keys(BookingCreateWithoutRoomInputSchemaObject),
Joi.object().keys(BookingUncheckedCreateWithoutRoomInputSchemaObject))
}