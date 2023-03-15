"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify_token = exports.generate_token = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || 'token.01010101';
const generate_token = async (id) => {
    const jwt = (0, jsonwebtoken_1.sign)({ id }, JWT_SECRET);
    return jwt;
};
exports.generate_token = generate_token;
const verify_token = (jwt) => {
    const is_ok = (0, jsonwebtoken_1.verify)(jwt, JWT_SECRET);
    return is_ok;
};
exports.verify_token = verify_token;
