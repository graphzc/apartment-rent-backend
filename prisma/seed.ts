import passwordEncoder from "../src/utils/passwordEncoder"
import { Role, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    const admin = await prisma.user.create({
        data: {
            name: 'Admin',
            email: 'admin@apartment',
            password: passwordEncoder('admin'),
            role: Role.ADMIN,
        }, 
    });
    console.log({ admin });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });