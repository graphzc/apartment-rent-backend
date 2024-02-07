import { Apartment } from "@prisma/client";
import Prisma from "./prisma";
import { CreateApartmentType, EditApartmentType } from "@/schema/apartmentSchema";

const prisma = Prisma.client();

const createApartment = async (apartment: CreateApartmentType): Promise<Apartment> => {
    const newApartment = await prisma.apartment.create({
        data: apartment,
        include: {
            room: true
        }
    });
    return newApartment;
};

const getAllApartment = async (): Promise<Apartment[]> => {
    const apartments = await prisma.apartment.findMany({
        include: {
            room: {
                include: {
                    booking: true
                }
            }

        },
        orderBy: {
            id: 'asc'
        }
    });

    return apartments;
};

const findApartmentById = async (id: number): Promise<Apartment | null> => { 
    const apartment = await prisma.apartment.findUnique({
        include: {
            room: true
        },
        where: {
            id
        }
    });
    
    return apartment;
};

const deleteApartment = async (id: number): Promise<Apartment | null> => {
    const deleted = await prisma.apartment.delete({
        where: {
            id: id
        },
        include: {
            room: true
        }
    });

    return deleted;
};

const editApartment = async (id: number, apartment: EditApartmentType): Promise<Apartment | null> => {
    const edited = await prisma.apartment.update({
        where: {
            id: id
        },
        data: {
            ...apartment
        },
        include: {
            room: true
        },
    });

    return edited;
}

const findApartmentByName = async (name: string): Promise<Apartment | null> => {
    const apartment = await prisma.apartment.findUnique({
        where: {
            name
        },
        include: {
            room: true
        }
    });

    return apartment;
}
export default {
    createApartment,
    getAllApartment,
    findApartmentById,
    deleteApartment,
    editApartment,
    findApartmentByName
}