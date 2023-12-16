// @ts-nocheck
import Joi from 'joi';
import { RoomCreateWithoutApartmentInputSchemaObject } from './RoomCreateWithoutApartmentInput.schema';
import { RoomUncheckedCreateWithoutApartmentInputSchemaObject } from './RoomUncheckedCreateWithoutApartmentInput.schema';
import { RoomCreateOrConnectWithoutApartmentInputSchemaObject } from './RoomCreateOrConnectWithoutApartmentInput.schema';
import { RoomUpsertWithWhereUniqueWithoutApartmentInputSchemaObject } from './RoomUpsertWithWhereUniqueWithoutApartmentInput.schema';
import { RoomCreateManyApartmentInputEnvelopeSchemaObject } from './RoomCreateManyApartmentInputEnvelope.schema';
import { RoomWhereUniqueInputSchemaObject } from './RoomWhereUniqueInput.schema';
import { RoomUpdateWithWhereUniqueWithoutApartmentInputSchemaObject } from './RoomUpdateWithWhereUniqueWithoutApartmentInput.schema';
import { RoomUpdateManyWithWhereWithoutApartmentInputSchemaObject } from './RoomUpdateManyWithWhereWithoutApartmentInput.schema';
import { RoomScalarWhereInputSchemaObject } from './RoomScalarWhereInput.schema'

export const RoomUncheckedUpdateManyWithoutApartmentNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(RoomCreateWithoutApartmentInputSchemaObject),
Joi.array().items(Joi.object().keys(RoomCreateWithoutApartmentInputSchemaObject)),
Joi.object().keys(RoomUncheckedCreateWithoutApartmentInputSchemaObject),
Joi.array().items(Joi.object().keys(RoomUncheckedCreateWithoutApartmentInputSchemaObject))),
  connectOrCreate: Joi.alternatives().try(Joi.object().keys(RoomCreateOrConnectWithoutApartmentInputSchemaObject),
Joi.array().items(Joi.object().keys(RoomCreateOrConnectWithoutApartmentInputSchemaObject))),
  upsert: Joi.alternatives().try(Joi.object().keys(RoomUpsertWithWhereUniqueWithoutApartmentInputSchemaObject),
Joi.array().items(Joi.object().keys(RoomUpsertWithWhereUniqueWithoutApartmentInputSchemaObject))),
  createMany: Joi.object().keys(RoomCreateManyApartmentInputEnvelopeSchemaObject),
  set: Joi.alternatives().try(Joi.object().keys(RoomWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RoomWhereUniqueInputSchemaObject))),
  disconnect: Joi.alternatives().try(Joi.object().keys(RoomWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RoomWhereUniqueInputSchemaObject))),
  delete: Joi.alternatives().try(Joi.object().keys(RoomWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RoomWhereUniqueInputSchemaObject))),
  connect: Joi.alternatives().try(Joi.object().keys(RoomWhereUniqueInputSchemaObject),
Joi.array().items(Joi.object().keys(RoomWhereUniqueInputSchemaObject))),
  update: Joi.alternatives().try(Joi.object().keys(RoomUpdateWithWhereUniqueWithoutApartmentInputSchemaObject),
Joi.array().items(Joi.object().keys(RoomUpdateWithWhereUniqueWithoutApartmentInputSchemaObject))),
  updateMany: Joi.alternatives().try(Joi.object().keys(RoomUpdateManyWithWhereWithoutApartmentInputSchemaObject),
Joi.array().items(Joi.object().keys(RoomUpdateManyWithWhereWithoutApartmentInputSchemaObject))),
  deleteMany: Joi.alternatives().try(Joi.object().keys(RoomScalarWhereInputSchemaObject),
Joi.array().items(Joi.object().keys(RoomScalarWhereInputSchemaObject)))
}