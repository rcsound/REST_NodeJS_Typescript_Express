"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle_http = void 0;
const handle_http = (res, error) => {
    res.status(500);
    res.send({ error });
};
exports.handle_http = handle_http;
