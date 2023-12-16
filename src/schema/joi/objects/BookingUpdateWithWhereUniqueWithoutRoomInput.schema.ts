// @ts-nocheck
import Joi from 'joi';
import { BookingWhereUniqueInputSchemaObject } from './BookingWhereUniqueInput.schema';
import { BookingUpdateWithoutRoomInputSchemaObject } from './BookingUpdateWithoutRoomInput.schema';
import { BookingUncheckedUpdateWithoutRoomInputSchemaObject } from './BookingUncheckedUpdateWithoutRoomInput.schema'

export const BookingUpdateWithWhereUniqueWithoutRoomInputSchemaObject = {
    where: Joi.object().keys(BookingWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(BookingUpdateWithoutRoomInputSchemaObject),
Joi.object().keys(BookingUncheckedUpdateWithoutRoomInputSchemaObject))
}