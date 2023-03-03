import { Auth } from "../interface/auth.interface";
import { User } from "../interface/user.interface";
import user_model from "../models/user";
import auth_model from "../models/user";
import { encrypt, verify } from "../utils/bcryptjs.handle";
import { generate_token } from "../utils/jwt.handle";

const register_new_user = async ( { email, password, name }:User) => {
    const check_is = await user_model.findOne({ email });
    if (check_is) return "ALREDY_USER";
    const pass_hash = await encrypt(password);
    const register_user = await user_model.create({ email, password:pass_hash, name, });

    // console.log(register_user, pass_hash)

    return register_user;
}

const login_user = async ({ email, password }:Auth) => {
    const check_is = await auth_model.findOne({ email }); //este busca en la base de datos y lo vuelca a check_is
    if (!check_is) return "NOT_FOUND";

    const password_hash = check_is.password; // check_is.password es el password que esdta encriptado en la bd y lo asigno a password_hash
    const is_correct = await verify (password, password_hash) // is_correcto compara contra lo que recibo del front que es password y lo que traje de la bd que es password_hash para ver si coinciden

    if (!is_correct) return "PASSWORD_INCORRECTO"

    const token = generate_token(check_is.id);
    console.log(token);
    const data = {
        token,
        user: check_is
    };
    return data;
};

const call_get_users = async () => {
    const response_users = await user_model.find({})
    return response_users;
}

export { register_new_user, login_user, call_get_users }