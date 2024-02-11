import userService from "@/services/userService";
import { Request, Response } from "express" 

export const getAllUser = async (req: Request, res: Response) => {
    const users = await userService.getAllUser();

    return res.status(200).json(users);
}

export const getUser = async (req: Request, res: Response) => {
    const id = req.params.id;

    const user = await userService.findUserById(id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    return res.status(200).json(user);
}

export const deleteUser = async (req: Request, res: Response) => {
    const id = req.params.id;

    const user = await userService.deleteUser(id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    return res.status(200).json(user);
}

export default {
    getAllUser,
    getUser,
    deleteUser,
}

