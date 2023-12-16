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
exports.deletePoolById = exports.updatePoolById = exports.createPool = exports.getPoolById = exports.getAllPools = void 0;
const joi_1 = require("../schema/joi");
const poolService_1 = __importDefault(require("../services/poolService"));
const getAllPools = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pools = yield poolService_1.default.getAllPools();
    return res.status(200).json(pools);
});
exports.getAllPools = getAllPools;
const getPoolById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const pool = yield poolService_1.default.findPoolById(id);
        if (!pool) {
            return res.status(404).json({
                message: 'Pool not found',
            });
        }
        return res.status(200).json(pool);
    }
    catch (error) {
        return res.status(400).json({
            message: 'Invalid id',
        });
    }
});
exports.getPoolById = getPoolById;
const createPool = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { value: pool, error: dayError } = joi_1.PoolCreateSchema.unknown(true).validate({
        address: body.address,
        price: Number(body.price),
        chemicalIncluded: body.chemicalIncluded,
        inService: body.inService,
        customerId: body.customerId,
        type: body.type,
    }, { convert: true });
    const { value: serviceDay, error: serviceError } = joi_1.ServiceDayUpdateOneSchema.unknown(true).validate({
        monday: body.serviceDay.monday,
        tuesday: body.serviceDay.tuesday,
        wednesday: body.serviceDay.wednesday,
        thursday: body.serviceDay.thursday,
        friday: body.serviceDay.friday,
        saturday: body.serviceDay.saturday,
        sunday: body.serviceDay.sunday,
    }, { convert: true });
    if (dayError || serviceError) {
        return res.status(400).json({
            message: (dayError === null || dayError === void 0 ? void 0 : dayError.message) || (serviceError === null || serviceError === void 0 ? void 0 : serviceError.message),
        });
    }
    const newPool = yield poolService_1.default.createPool(pool, serviceDay);
    if (!newPool) {
        return res.status(404).json({
            message: 'Fail to create pool',
        });
    }
    return res.status(201).json(newPool);
});
exports.createPool = createPool;
const updatePoolById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    const { value: pool, error: dayError } = joi_1.PoolUpdateOneSchema.unknown(true).validate(body);
    const { value: serviceDay, error: serviceError } = joi_1.ServiceDayUpdateOneSchema.unknown(true).validate(body.serviceDay);
    if (dayError || serviceError) {
        return res.status(400).json({
            message: (dayError === null || dayError === void 0 ? void 0 : dayError.message) || (serviceError === null || serviceError === void 0 ? void 0 : serviceError.message),
        });
    }
    const updatedPool = yield poolService_1.default.updatePool(id, pool, serviceDay);
    if (!updatedPool) {
        return res.status(404).json({
            message: 'Fail to update pool',
        });
    }
    return res.status(200).json(updatedPool);
});
exports.updatePoolById = updatePoolById;
const deletePoolById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedPool = yield poolService_1.default.deletePoolById(id);
    if (!deletedPool) {
        return res.status(404).json({
            message: 'Fail to delete pool',
        });
    }
    return res.status(200).json(deletedPool);
});
exports.deletePoolById = deletePoolById;
