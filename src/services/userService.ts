import { Role } from "@prisma/client";
import Prisma from "./prisma";
import passwordEncoder from "@/utils/passwordEncoder";

const prisma = Prisma.client()

const findUserByEmail = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email,
        }
    });

    return user;
}

const createUser = async (name: string, email: string, password: string, role: Role) => {
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: passwordEncoder(password),
            role,
        }
    });

    return user;
}

const deleteUser = async (id: string) => {
    const deleted = await prisma.user.delete({
        where: {
            id,
        }
    });

    return deleted;
}

export default {
    findUserByEmail,
    createUser,
    deleteUser,
}