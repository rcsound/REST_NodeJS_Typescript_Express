"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_users = exports.register_ctrl = exports.login_ctrol = void 0;
const auth_1 = require("../services/auth");
const register_ctrl = async ({ body }, res) => {
    const response_user = await (0, auth_1.register_new_user)(body);
    res.send(response_user);
};
exports.register_ctrl = register_ctrl;
const login_ctrol = async ({ body }, res) => {
    const { email, password } = body;
    const response_user = await (0, auth_1.login_user)({ email, password });
    res.send(response_user);
};
exports.login_ctrol = login_ctrol;
const get_users = async ({ params }, res) => {
    const { id } = params;
    const response = await (0, auth_1.call_get_users)();
    res.send(response);
    console.log(response);
};
exports.get_users = get_users;
