// @ts-nocheck
import Joi from 'joi';
import { BookingCreateWithoutRoomInputSchemaObject } from './BookingCreateWithoutRoomInput.schema';
import { BookingUncheckedCreateWithoutRoomInputSchemaObject } from './BookingUncheckedCreateWithoutRoomInput.schema';
import { BookingCreateOrConnectWithoutRoomInputSchemaObject } from './BookingCreateOrConnectWithoutRoomInput.schema';
import { BookingUpsertWithWhereUniqueWithoutRoomInputSchemaObject } from './BookingUpsertWithWhereUniqueWithoutRoomInput.schema';
import { BookingCreateManyRoomInputEnvelopeSchemaObject } from './BookingCreateManyRoomInputEnvelope.schema';
import { BookingWhereUniqueInputSchemaObject } from './BookingWhereUniqueInput.schema';
import { BookingUpdateWithWhereUniqueWithoutRoomInputSchemaObject } from './BookingUpdateWithWhereUniqueWithoutRoomInput.schema';
import { BookingUpdateManyWithWhereWithoutRoomInputSchemaObject } from './BookingUpdateManyWithWhereWithoutRoomInput.schema';
import { BookingScalarWhereInputSchemaObject } from './BookingScalarWhereInput.schema'

export const BookingUpdateManyWithoutRoomNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(BookingCreateWithoutRoomInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingCreateWithoutRoomInputSchemaObject)),
Joi.object().keys(BookingUncheckedCreateWithoutRoomInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingUncheckedCreateWithoutRoomInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(BookingCreateOrConnectWithoutRoomInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingCreateOrConnectWithoutRoomInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(BookingUpsertWithWhereUniqueWithoutRoomInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingUpsertWithWhereUniqueWithoutRoomInputSchemaObject))),
  createMany: Joi.object().keys(BookingCreateManyRoomInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(BookingWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(BookingWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(BookingWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(BookingWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(BookingUpdateWithWhereUniqueWithoutRoomInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingUpdateWithWhereUniqueWithoutRoomInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(BookingUpdateManyWithWhereWithoutRoomInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingUpdateManyWithWhereWithoutRoomInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(BookingScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(BookingScalarWhereInputSchemaObject)))
}