"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("./prisma"));
const passwordEncoder_1 = __importDefault(require("../utils/passwordEncoder"));
const prisma = prisma_1.default.client();
const getAllEmployees = () => __awaiter(void 0, void 0, void 0, function* () {
    const employees = yield prisma.employee.findMany({
        orderBy: {
            createdAt: 'desc',
        }
    });
    return employees;
});
const findEmployeeByUsername = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const employee = yield prisma.employee.findUnique({
        where: {
            username,
        }
    });
    return employee;
});
const isEmployeeExist = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const employee = yield findEmployeeByUsername(username);
    return !!employee;
});
const findEmployeeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const employee = yield prisma.employee.findUnique({
        where: {
            id,
        }
    });
    return employee;
});
const createEmployee = ({ username, password, name, role }) => __awaiter(void 0, void 0, void 0, function* () {
    const employee = yield prisma.employee.create({
        data: {
            username,
            password: (0, passwordEncoder_1.default)(password),
            name,
            role
        }
    });
    return employee;
});
const deleteEmployeeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const employee = yield prisma.employee.delete({
        where: {
            id,
        }
    });
    return employee;
});
const updateEmployeeById = (id, { password, name, role }) => __awaiter(void 0, void 0, void 0, function* () {
    if (password) {
        password = (0, passwordEncoder_1.default)(password);
    }
    const employee = yield prisma.employee.update({
        where: {
            id,
        },
        data: {
            password,
            name,
            role
        }
    });
    return employee;
});
exports.default = {
    getAllEmployees,
    findEmployeeByUsername,
    isEmployeeExist,
    findEmployeeById,
    createEmployee,
    deleteEmployeeById,
    updateEmployeeById,
};
