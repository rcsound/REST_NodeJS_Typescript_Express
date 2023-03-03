import { sign, verify } from "jsonwebtoken"
const JWT_SECRET = process.env.JWT_SECRET || 'token.01010101'

const generate_token = async (id:string) => {
    const jwt = sign({id}, JWT_SECRET);
    return jwt;
}

const verify_token = (jwt:string) => {
    const is_ok = verify(jwt, JWT_SECRET);
    return is_ok;

}

export { generate_token, verify_token }