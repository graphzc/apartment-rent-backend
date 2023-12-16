// @ts-nocheck
import Joi from 'joi';
import { BookingWhereUniqueInputSchemaObject } from './BookingWhereUniqueInput.schema';
import { BookingUpdateWithoutRoomInputSchemaObject } from './BookingUpdateWithoutRoomInput.schema';
import { BookingUncheckedUpdateWithoutRoomInputSchemaObject } from './BookingUncheckedUpdateWithoutRoomInput.schema';
import { BookingCreateWithoutRoomInputSchemaObject } from './BookingCreateWithoutRoomInput.schema';
import { BookingUncheckedCreateWithoutRoomInputSchemaObject } from './BookingUncheckedCreateWithoutRoomInput.schema'

export const BookingUpsertWithWhereUniqueWithoutRoomInputSchemaObject = {
    where: Joi.object().keys(BookingWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(BookingUpdateWithoutRoomInputSchemaObject),
Joi.object().keys(BookingUncheckedUpdateWithoutRoomInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(BookingCreateWithoutRoomInputSchemaObject),
Joi.object().keys(BookingUncheckedCreateWithoutRoomInputSchemaObject))
}