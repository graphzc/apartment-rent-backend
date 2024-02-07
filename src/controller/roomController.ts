import { Request, Response } from "express";
import roomService from "@/services/roomService";
import { CreateRoomValidation, EditRoomValidation } from "@/schema/roomSchema";
import { ZodError } from "zod";

export const getAllRoom = async (req: Request, res: Response) => {
    const rooms = await roomService.getAllRoom();

    return res.status(200).json(rooms);
}

export const getRoom = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const room = await roomService.findRoomById(id);

    if (!room) {
        return res.status(404).json({
            message: "room not found"
        });
    }

    return res.status(200).json(room);
}

export const createRoom = async (req: Request, res: Response) => {
    try {
        const payload = CreateRoomValidation.parse(req.body)
        
        const isExist = await roomService.findRoomByNo(payload.no);
        if (isExist.length > 0) {
            return res.status(400).json({
                message: "Room already exist"
            });
        }
    
        const room = await roomService.createRoom(payload);

        return res.status(201).json(room);
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                message: error.issues
            });
        }
    }
}

export const deleteRoom = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const room = await roomService.deleteRoom(id);

    if (!room) {
        return res.status(404).json({
            message: "Room not found"
        });
    }

    return res.status(200).json(room);
}

export const updateRoom = async (req: Request, res: Response) => {
    try {
        const payload = EditRoomValidation.parse(req.body);
        const id = parseInt(req.params.id);

        const isExist = await roomService.findRoomByNo(payload.no);

        if (isExist) {
            return res.status(400).json({
                message: "Room already exist"
            });
        }

        const room = await roomService.editRoom(id, payload);

        if (room) {
            return res.status(200).json(room);
        }

    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                message: error.issues
            });
        }
    }
}