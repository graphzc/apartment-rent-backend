import { Apartment } from "@prisma/client";
import Prisma from "./prisma";

const prisma = Prisma.client();

const createApartment = async (apartment: Apartment): Promise<Apartment> => {
    const newApartment = await prisma.apartment.create({
        data: apartment
    })
    return newApartment;
};

const getAllApartment = async (): Promise<Apartment[]> => {
    const apartments = await prisma.apartment.findMany();

    return apartments;
};

const findApartmentById = async (id: number): Promise<Apartment | null> => {
    const apartment = await prisma.apartment.findUnique({
        where: {
            id
        }
    })
    
    return apartment;
};

const deleteApartment = async (id: number): Promise<Apartment | null> => {
    const deleted = await prisma.apartment.delete({
        where: {
            id: id
        }
    })

    return deleted;
};

const editApartment = async (id: number, apartment: Apartment): Promise<Apartment | null> => {
    const edited = await prisma.apartment.update({
        where: {
            id: id
        },
        data: {
            ...apartment
        }
    })

    return edited;
}

export default {
    createApartment,
    getAllApartment,
    findApartmentById,
    deleteApartment,
    editApartment,
}