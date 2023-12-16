// @ts-nocheck
import Joi from 'joi';
import { RoomWhereUniqueInputSchemaObject } from './RoomWhereUniqueInput.schema';
import { RoomUpdateWithoutApartmentInputSchemaObject } from './RoomUpdateWithoutApartmentInput.schema';
import { RoomUncheckedUpdateWithoutApartmentInputSchemaObject } from './RoomUncheckedUpdateWithoutApartmentInput.schema'

export const RoomUpdateWithWhereUniqueWithoutApartmentInputSchemaObject = {
    where: Joi.object().keys(RoomWhereUniqueInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(RoomUpdateWithoutApartmentInputSchemaObject),
Joi.object().keys(RoomUncheckedUpdateWithoutApartmentInputSchemaObject))
}