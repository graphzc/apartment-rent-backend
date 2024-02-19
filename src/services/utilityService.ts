import { Utility } from "@prisma/client";
import Prisma from "./prisma";
import { CreateUtilityType, UpdateUtilityType } from "@/schema/utilitySchema";

const prisma = Prisma.client();

const getAllUtilities = async () : Promise<Utility[]> => {
    const utilities = await prisma.utility.findMany();

    return utilities;
}

const findUtilityById = async (id: number) : Promise<Utility | null> => {
    const utility = await prisma.utility.findUnique({
        where: {
            id
        }
    });

    return utility;
}

const findUtilityByBooking = async (bookingId: number) : Promise<Utility[]> => {
    const utilities = await prisma.utility.findMany({
        where: {
            bookingId
        },
        orderBy: {
            id: 'desc'
        }
    });

    return utilities;
}

const createUtility = async (utility: CreateUtilityType) : Promise<Utility> => {
    const newUtility = await prisma.utility.create({
        data: utility
    });

    return newUtility;
}

const updateUtility = async (id: number, utility: UpdateUtilityType) : Promise<Utility> => {
    const updatedUtility = await prisma.utility.update({
        where: {
            id
        },
        data: utility
    });

    return updatedUtility;
}

const deleteUtility = async (id: number) : Promise<Utility> => {
    const deletedUtility = await prisma.utility.delete({
        where: {
            id
        }
    });

    return deletedUtility;
}

export default {
    getAllUtilities,
    findUtilityById,
    findUtilityByBooking,
    createUtility,
    updateUtility,
    deleteUtility
}