import { Request, Response } from "express"
import { JwtPayload } from "jsonwebtoken";
import { call_insert_pelis, call_get_pelis, call_get_peli, call_update_peli, call_delete_peli } from "../services/pelis"
import { handle_http } from "../utils/error.handles"

interface Request_ext extends Request{
    user?: string | JwtPayload;
}

const get_pelis = async (req:Request_ext, res:Response) => {
    try{
        res.send({
            data: "ESTO SOLO LO VEN LAS PERSONAS CON SESIONES ABIERTAS / JWT",
            user: req.user
        })
    } catch (e){
        handle_http(res, 'ERROR_GET_ITEMS');
    }
}


export { get_pelis }