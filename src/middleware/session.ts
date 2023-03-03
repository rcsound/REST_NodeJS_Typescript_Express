import { NextFunction, Request, Response } from "express"
import { JwtPayload } from "jsonwebtoken";
import user_model from "../models/user";
import { verify_token } from "../utils/jwt.handle";

interface Request_ext extends Request{
    user?: string | JwtPayload;
}

const check_jwt = (req: Request_ext, res: Response, next: NextFunction) => {
    try{
        const jwt_user = req.headers.authorization || '';
        const jwt = jwt_user.split(' ').pop() //['Bearer', '111111']
        const is_user = verify_token(`${jwt}`);
        if (!is_user){
            res.status(401);
            res.send("NO_TIENES_UNA_SESION_VALIDA")
        } else {
            req.user = is_user;
            next();
        }
        console.log({ jwt_user });
        next();
    } catch (e) {
        res.status(400);
        res.send("SESSION_NO_INICILIAZADA")
    }
}

export { check_jwt }