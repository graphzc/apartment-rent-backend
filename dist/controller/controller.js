"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = exports.healthCheck = void 0;
const healthCheck = (req, res) => {
    return res.status(200).json({
        success: true,
    });
};
exports.healthCheck = healthCheck;
const helloWorld = (req, res) => {
    return res.status(200).json({
        message: 'Hello World!'
    });
};
exports.helloWorld = helloWorld;
