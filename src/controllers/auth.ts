import { Request, response, Response } from "express"
import { login_user, register_new_user, call_get_users } from "../services/auth"

const register_ctrl = async ({ body }:Request, res:Response) => { 
    const response_user = await register_new_user(body);
    res.send(response_user);
    
}

const login_ctrol = async ({ body }:Request, res:Response) => {
    const { email, password } = body;
    const response_user = await login_user({ email, password });
    res.send(response_user);

}

const get_users = async ({ params }:Request, res:Response) => {
    const { id } = params;
    const response = await call_get_users();
    res.send(response);
    console.log(response);

}

export { login_ctrol, register_ctrl, get_users}