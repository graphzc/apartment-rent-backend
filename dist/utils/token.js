"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJwtTokenHeader = void 0;
const getJwtTokenHeader = (req) => {
    var _a;
    return (_a = req.headers["authorization"]) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
};
exports.getJwtTokenHeader = getJwtTokenHeader;
