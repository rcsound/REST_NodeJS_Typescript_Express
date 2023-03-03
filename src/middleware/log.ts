import { NextFunction, Request, request, Response } from "express";

const log_middleware = (req: Request, res: Response, next: NextFunction) => {
    
    // console.log("Hola soy el LOG");
    const header = req.headers;
    const user_agent = header["user-agent"];
    const content_type = header["content-type"];
    console.log("user-agent", user_agent, "content type", content_type);
    next(); // hace que la peticion pase de largo para que siga la ejecucion del controlador
};

export { log_middleware}