// @ts-nocheck
import Joi from 'joi';
import { RoomScalarWhereInputSchemaObject } from './RoomScalarWhereInput.schema';
import { RoomUpdateManyMutationInputSchemaObject } from './RoomUpdateManyMutationInput.schema';
import { RoomUncheckedUpdateManyWithoutRoomInputSchemaObject } from './RoomUncheckedUpdateManyWithoutRoomInput.schema'

export const RoomUpdateManyWithWhereWithoutApartmentInputSchemaObject = {
    where: Joi.object().keys(RoomScalarWhereInputSchemaObject),
  data: Joi.alternatives().try(Joi.object().keys(RoomUpdateManyMutationInputSchemaObject),
Joi.object().keys(RoomUncheckedUpdateManyWithoutRoomInputSchemaObject))
}