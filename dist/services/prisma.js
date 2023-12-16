"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class Prisma {
    constructor() { }
    static client() {
        return Prisma.instance;
    }
}
Prisma.instance = new client_1.PrismaClient();
exports.default = Prisma;
