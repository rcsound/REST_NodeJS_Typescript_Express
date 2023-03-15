"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.call_get_users = exports.login_user = exports.register_new_user = void 0;
const user_1 = __importDefault(require("../models/user"));
const user_2 = __importDefault(require("../models/user"));
const bcryptjs_handle_1 = require("../utils/bcryptjs.handle");
const jwt_handle_1 = require("../utils/jwt.handle");
const register_new_user = async ({ email, password, name }) => {
    const check_is = await user_1.default.findOne({ email });
    if (check_is)
        return "ALREDY_USER";
    const pass_hash = await (0, bcryptjs_handle_1.encrypt)(password);
    const register_user = await user_1.default.create({ email, password: pass_hash, name, });
    // console.log(register_user, pass_hash)
    return register_user;
};
exports.register_new_user = register_new_user;
const login_user = async ({ email, password }) => {
    const check_is = await user_2.default.findOne({ email }); //este busca en la base de datos y lo vuelca a check_is
    if (!check_is)
        return "NOT_FOUND";
    const password_hash = check_is.password; // check_is.password es el password que esdta encriptado en la bd y lo asigno a password_hash
    const is_correct = await (0, bcryptjs_handle_1.verify)(password, password_hash); // is_correcto compara contra lo que recibo del front que es password y lo que traje de la bd que es password_hash para ver si coinciden
    if (!is_correct)
        return "PASSWORD_INCORRECTO";
    const token = (0, jwt_handle_1.generate_token)(check_is.id);
    console.log(token);
    const data = {
        token,
        user: check_is
    };
    return data;
};
exports.login_user = login_user;
const call_get_users = async () => {
    const response_users = await user_1.default.find({});
    return response_users;
};
exports.call_get_users = call_get_users;
