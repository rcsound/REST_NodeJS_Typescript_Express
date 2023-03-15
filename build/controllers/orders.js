"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_pelis = void 0;
const error_handles_1 = require("../utils/error.handles");
const get_pelis = async (req, res) => {
    try {
        res.send({
            data: "ESTO SOLO LO VEN LAS PERSONAS CON SESIONES ABIERTAS / JWT",
            user: req.user
        });
    }
    catch (e) {
        (0, error_handles_1.handle_http)(res, 'ERROR_GET_ITEMS');
    }
};
exports.get_pelis = get_pelis;
