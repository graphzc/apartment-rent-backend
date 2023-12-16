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
exports.deleteEmployeeById = exports.updateEmployeeById = exports.getEmployeeById = exports.getAllEmployees = exports.createEmployee = void 0;
const employeeService_1 = __importDefault(require("../services/employeeService"));
const joi_1 = require("../schema/joi");
const createEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { value, error } = joi_1.EmployeeCreateSchema.unknown(true).validate(body);
    if (error) {
        return res.status(400).json({
            message: error.message
        });
    }
    if (yield employeeService_1.default.isEmployeeExist(value.username)) {
        return res.status(400).json({
            message: "Username already exist"
        });
    }
    const employee = yield employeeService_1.default.createEmployee(value);
    if (!employee) {
        return res.status(500).json({
            message: "Cannot create employee"
        });
    }
    return res.status(200).json(employee);
});
exports.createEmployee = createEmployee;
const getAllEmployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const employees = yield employeeService_1.default.getAllEmployees();
    return res.status(200).json(employees);
});
exports.getAllEmployees = getAllEmployees;
const getEmployeeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const employee = yield employeeService_1.default.findEmployeeById(id);
    if (!employee) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }
    return res.status(200).json(employee);
});
exports.getEmployeeById = getEmployeeById;
const updateEmployeeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    const { value, error } = joi_1.EmployeeUpdateOneSchema.unknown(true).validate(body);
    if (error) {
        return res.status(400).json({
            message: error.message
        });
    }
    const employee = yield employeeService_1.default.updateEmployeeById(id, value);
    if (!employee) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }
    return res.status(200).json(employee);
});
exports.updateEmployeeById = updateEmployeeById;
const deleteEmployeeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const employee = yield employeeService_1.default.deleteEmployeeById(id);
    if (!employee) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }
    return res.status(200).json(employee);
});
exports.deleteEmployeeById = deleteEmployeeById;
