// @ts-nocheck
import Joi from 'joi';
import { RoomWhereUniqueInputSchemaObject } from './RoomWhereUniqueInput.schema';
import { RoomUpdateWithoutApartmentInputSchemaObject } from './RoomUpdateWithoutApartmentInput.schema';
import { RoomUncheckedUpdateWithoutApartmentInputSchemaObject } from './RoomUncheckedUpdateWithoutApartmentInput.schema';
import { RoomCreateWithoutApartmentInputSchemaObject } from './RoomCreateWithoutApartmentInput.schema';
import { RoomUncheckedCreateWithoutApartmentInputSchemaObject } from './RoomUncheckedCreateWithoutApartmentInput.schema'

export const RoomUpsertWithWhereUniqueWithoutApartmentInputSchemaObject = {
    where: Joi.object().keys(RoomWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(RoomUpdateWithoutApartmentInputSchemaObject),
Joi.object().keys(RoomUncheckedUpdateWithoutApartmentInputSchemaObject)),
  create: Joi.alternatives().try(Joi.object().keys(RoomCreateWithoutApartmentInputSchemaObject),
Joi.object().keys(RoomUncheckedCreateWithoutApartmentInputSchemaObject))
}