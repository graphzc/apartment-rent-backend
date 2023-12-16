"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolTypeSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.PoolTypeSchema = joi_1.default.string().valid(...["CHLORINE", "SALT"]);
