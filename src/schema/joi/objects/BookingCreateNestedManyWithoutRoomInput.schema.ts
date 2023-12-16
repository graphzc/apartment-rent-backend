// @ts-nocheck
import Joi from 'joi';
import { BookingCreateWithoutRoomInputSchemaObject } from './BookingCreateWithoutRoomInput.schema';
import { BookingUncheckedCreateWithoutRoomInputSchemaObject } from './BookingUncheckedCreateWithoutRoomInput.schema';
import { BookingCreateOrConnectWithoutRoomInputSchemaObject } from './BookingCreateOrConnectWithoutRoomInput.schema';
import { BookingCreateManyRoomInputEnvelopeSchemaObject } from './BookingCreateManyRoomInputEnvelope.schema';
import { BookingWhereUniqueInputSchemaObject } from './BookingWhereUniqueInput.schema'

export const BookingCreateNestedManyWithoutRoomInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(BookingCreateWithoutRoomInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingCreateWithoutRoomInputSchemaObject)),
Joi.object().keys(BookingUncheckedCreateWithoutRoomInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingUncheckedCreateWithoutRoomInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(BookingCreateOrConnectWithoutRoomInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingCreateOrConnectWithoutRoomInputSchemaObject))),
  createMany: Joi.object().keys(BookingCreateManyRoomInputEnvelopeSchemaObject),
  connect: Joi.alternatives().try(Joi.object().keys(BookingWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingWhereUniqueInputSchemaObject)))
}