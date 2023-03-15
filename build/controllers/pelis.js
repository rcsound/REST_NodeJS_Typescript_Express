"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_peli = exports.post_peli = exports.update_peli = exports.get_pelis = exports.get_peli = void 0;
const pelis_1 = require("../services/pelis");
const error_handles_1 = require("../utils/error.handles");
const get_peli = async ({ params }, res) => {
    try {
        const { id } = params;
        const response = await (0, pelis_1.call_get_peli)(id);
        res.send(response);
        console.log(response);
    }
    catch (e) {
        (0, error_handles_1.handle_http)(res, 'ERROR_GET_ITEM');
    }
};
exports.get_peli = get_peli;
const get_pelis = async (req, res) => {
    try {
        const response = await (0, pelis_1.call_get_pelis)();
        res.send(response);
        // console.log(response);
    }
    catch (e) {
        (0, error_handles_1.handle_http)(res, 'ERROR_GET_ITEMS');
    }
};
exports.get_pelis = get_pelis;
const update_peli = async ({ params, body }, res) => {
    try {
        const { id } = params;
        const response = await (0, pelis_1.call_update_peli)(id, body);
        res.send(response);
        console.log(response);
    }
    catch (e) {
        (0, error_handles_1.handle_http)(res, 'ERROR_UPDATE_ITEM');
    }
};
exports.update_peli = update_peli;
const post_peli = async ({ body }, res) => {
    try {
        const response_peli = await (0, pelis_1.call_insert_pelis)(body);
        res.send(response_peli);
        console.log("Pegue una vuelta");
    }
    catch (e) {
        (0, error_handles_1.handle_http)(res, 'ERROR_POST_ITEM');
    }
};
exports.post_peli = post_peli;
const delete_peli = async ({ params }, res) => {
    try {
        const { id } = params;
        const response = await (0, pelis_1.call_delete_peli)(id);
        res.send(response);
        console.log(response);
    }
    catch (e) {
        (0, error_handles_1.handle_http)(res, 'ERROR_DELETE_ITEM');
    }
};
exports.delete_peli = delete_peli;
