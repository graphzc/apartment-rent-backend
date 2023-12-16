"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrderSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.NullsOrderSchema = joi_1.default.string().valid(...["first", "last"]);
