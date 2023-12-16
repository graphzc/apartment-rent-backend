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
exports.updateApartment = exports.deleteApartment = exports.createApartment = exports.getApartment = exports.getAllApartment = void 0;
const apartmentService_1 = __importDefault(require("../services/apartmentService"));
const joi_1 = require("../schema/joi");
const getAllApartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const apartments = yield apartmentService_1.default.getAllApartment();
    return res.status(200).json(apartments);
});
exports.getAllApartment = getAllApartment;
const getApartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const apartment = yield apartmentService_1.default.findApartmentById(id);
    if (!apartment) {
        return res.status(404).json({
            message: "Apartment not found"
        });
    }
    return res.status(200).json(apartment);
});
exports.getApartment = getApartment;
const createApartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    console.log(joi_1.ApartmentCreateSchema.validate(body));
    // if (error) {
    //     return res.status(400).json({
    //         message: error.message
    //     });
    // }
    // const apartment = await apartmentService.createApartment(value);
    // return res.status(201).json(apartment);
});
exports.createApartment = createApartment;
const deleteApartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const apartment = yield apartmentService_1.default.deleteApartment(id);
    if (!apartment) {
        return res.status(404).json({
            message: "Apartment not found"
        });
    }
    return res.status(200).json(apartment);
});
exports.deleteApartment = deleteApartment;
const updateApartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const payload = req.body;
    const { value, error } = joi_1.ApartmentUpdateOneSchema.validate(payload);
    if (error) {
        return res.status(400).json({
            message: error.message
        });
    }
    const apartment = yield apartmentService_1.default.editApartment(id, value);
    if (!apartment) {
        return res.status(404).json({
            message: "Apartment not found"
        });
    }
    return res.status(200).json(apartment);
});
exports.updateApartment = updateApartment;
