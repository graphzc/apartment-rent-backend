import { Apartment, Room } from "@prisma/client";
import Prisma from "./prisma";
import { CreateRoomType, EditRoomType } from "@/schema/roomSchema";

const prisma = Prisma.client();

const createRoom = async (room: CreateRoomType ): Promise<Room> => {
    const newRoom = await prisma.room.create({

       data:room
    });
    return newRoom;
};

const getAllRoom = async (): Promise<Room[]> => {
    const rooms = await prisma.room.findMany({
        orderBy: {
           id:"asc"
        }
    });

    return rooms;
};

const findRoomById = async (id: number): Promise<Room | null> => { 
    const room = await prisma.room.findUnique({
        where: {
            id
        }
    });
    
    return room;
};

const deleteRoom = async (id: number): Promise<Room | null> => {
    const deleted = await prisma.room.delete({
        where: {
            id: id
        },

    });

    return deleted;
};

const editRoom = async (id: number, room: EditRoomType): Promise<Room | null> => {
    const edited = await prisma.room.update({
        where: {
            id: id
        },
        data: {
            ...room
        },

    });

    return edited;
}

const findRoomByNo = async (no: number): Promise<Room[]| null> => {
    const rooms = await prisma.room.findMany({
        where: {
            no
        },
        orderBy: {
            apartmentId:"asc"
         }
    });

    return rooms;
}
export default {
    createRoom,
    getAllRoom,
    findRoomById,
    deleteRoom,
    editRoom,
    findRoomByNo
}