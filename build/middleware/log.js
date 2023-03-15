"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log_middleware = void 0;
const log_middleware = (req, res, next) => {
    // console.log("Hola soy el LOG");
    const header = req.headers;
    const user_agent = header["user-agent"];
    const content_type = header["content-type"];
    console.log("user-agent", user_agent, "content type", content_type);
    next(); // hace que la peticion pase de largo para que siga la ejecucion del controlador
};
exports.log_middleware = log_middleware;
