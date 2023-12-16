// @ts-nocheck
import Joi from 'joi';
import { BookingScalarWhereInputSchemaObject } from './BookingScalarWhereInput.schema';
import { BookingUpdateManyMutationInputSchemaObject } from './BookingUpdateManyMutationInput.schema';
import { BookingUncheckedUpdateManyWithoutBookingInputSchemaObject } from './BookingUncheckedUpdateManyWithoutBookingInput.schema'

export const BookingUpdateManyWithWhereWithoutUserInputSchemaObject = {
    where: Joi.object().keys(BookingScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(BookingUpdateManyMutationInputSchemaObject),
Joi.object().keys(BookingUncheckedUpdateManyWithoutBookingInputSchemaObject))
}