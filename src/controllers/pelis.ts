import { Request, Response } from "express"
import { call_insert_pelis, call_get_pelis, call_get_peli, call_update_peli, call_delete_peli } from "../services/pelis"
import { handle_http } from "../utils/error.handles"

const get_peli = async ({ params }:Request, res:Response) => {
    try{
        const { id } = params;
        const response = await call_get_peli(id);
        res.send(response);
        console.log(response);
    } catch (e){
        handle_http(res, 'ERROR_GET_ITEM');
    }
}

const get_pelis = async (req:Request, res:Response) => {
    try{
        const response = await call_get_pelis();
        res.send(response);
        console.log(response);
    } catch (e){
        handle_http(res, 'ERROR_GET_ITEMS');
    }
}

const update_peli = async ({ params, body }:Request, res:Response) => {

    try{
        const { id } = params;
        const response = await call_update_peli(id, body);
        res.send(response);
        console.log(response);
    } catch (e){
        handle_http(res, 'ERROR_UPDATE_ITEM')
    }
}

const post_peli = async ({ body }:Request, res:Response) => {
    try{
        const response_peli = await call_insert_pelis(body);
        res.send(response_peli);
        console.log("Pegue una vuelta");
    } catch (e){
        handle_http(res, 'ERROR_POST_ITEM');
    }
}

const delete_peli= async ({ params }:Request, res:Response) => {

    try{
        const { id } = params;
        const response = await call_delete_peli(id);
        res.send(response);
        console.log(response);

    } catch (e){
        handle_http(res, 'ERROR_DELETE_ITEM')
    }
}

export {get_peli, get_pelis, update_peli, post_peli, delete_peli}