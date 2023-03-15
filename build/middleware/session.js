"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check_jwt = void 0;
const jwt_handle_1 = require("../utils/jwt.handle");
const check_jwt = (req, res, next) => {
    try {
        const jwt_user = req.headers.authorization || '';
        const jwt = jwt_user.split(' ').pop(); //['Bearer', '111111']
        const is_user = (0, jwt_handle_1.verify_token)(`${jwt}`);
        if (!is_user) {
            res.status(401);
            res.send("NO_TIENES_UNA_SESION_VALIDA");
        }
        else {
            req.user = is_user;
            next();
        }
        console.log({ jwt_user });
        next();
    }
    catch (e) {
        res.status(400);
        res.send("SESSION_NO_INICILIAZADA");
    }
};
exports.check_jwt = check_jwt;
