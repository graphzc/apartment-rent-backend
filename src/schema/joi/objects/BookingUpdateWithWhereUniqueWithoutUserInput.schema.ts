// @ts-nocheck
import Joi from 'joi';
import { BookingWhereUniqueInputSchemaObject } from './BookingWhereUniqueInput.schema';
import { BookingUpdateWithoutUserInputSchemaObject } from './BookingUpdateWithoutUserInput.schema';
import { BookingUncheckedUpdateWithoutUserInputSchemaObject } from './BookingUncheckedUpdateWithoutUserInput.schema'

export const BookingUpdateWithWhereUniqueWithoutUserInputSchemaObject = {
    where: Joi.object().keys(BookingWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(BookingUpdateWithoutUserInputSchemaObject),
Joi.object().keys(BookingUncheckedUpdateWithoutUserInputSchemaObject))
}