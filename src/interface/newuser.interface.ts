import { JwtPayload } from "jsonwebtoken";

interface Request_ext extends Request{
    user?: string | JwtPayload;
}