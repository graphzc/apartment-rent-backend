// @ts-nocheck
import Joi from 'joi';
import { ApartmentCreateWithoutRoomInputSchemaObject } from './ApartmentCreateWithoutRoomInput.schema';
import { ApartmentUncheckedCreateWithoutRoomInputSchemaObject } from './ApartmentUncheckedCreateWithoutRoomInput.schema';
import { ApartmentCreateOrConnectWithoutRoomInputSchemaObject } from './ApartmentCreateOrConnectWithoutRoomInput.schema';
import { ApartmentUpsertWithoutRoomInputSchemaObject } from './ApartmentUpsertWithoutRoomInput.schema';
import { ApartmentWhereUniqueInputSchemaObject } from './ApartmentWhereUniqueInput.schema';
import { ApartmentUpdateWithoutRoomInputSchemaObject } from './ApartmentUpdateWithoutRoomInput.schema';
import { ApartmentUncheckedUpdateWithoutRoomInputSchemaObject } from './ApartmentUncheckedUpdateWithoutRoomInput.schema'

export const ApartmentUpdateOneRequiredWithoutRoomNestedInputSchemaObject = {
    create: Joi.alternatives().try(Joi.object().keys(ApartmentCreateWithoutRoomInputSchemaObject),
Joi.object().keys(ApartmentUncheckedCreateWithoutRoomInputSchemaObject)),
  connectOrCreate: Joi.object().keys(ApartmentCreateOrConnectWithoutRoomInputSchemaObject),
  upsert: Joi.object().keys(ApartmentUpsertWithoutRoomInputSchemaObject),
  connect: Joi.object().keys(ApartmentWhereUniqueInputSchemaObject),
  update: Joi.alternatives().try(Joi.object().keys(ApartmentUpdateWithoutRoomInputSchemaObject),
Joi.object().keys(ApartmentUncheckedUpdateWithoutRoomInputSchemaObject))
}