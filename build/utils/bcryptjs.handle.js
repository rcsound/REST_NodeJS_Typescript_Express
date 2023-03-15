"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = exports.encrypt = void 0;
const bcryptjs_1 = require("bcryptjs");
const encrypt = async (pass) => {
    const password_hash = await (0, bcryptjs_1.hash)(pass, 8);
    return password_hash;
};
exports.encrypt = encrypt;
const verify = async (pass, pass_hash) => {
    const is_correct = await (0, bcryptjs_1.compare)(pass, pass_hash);
    return is_correct;
};
exports.verify = verify;
