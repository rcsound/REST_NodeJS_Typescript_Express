import { hash, compare } from "bcryptjs"


const encrypt = async (pass:string) => {
    const password_hash = await hash(pass, 8);
    return password_hash;
}

const verify = async (pass:string, pass_hash: string) => {
    const is_correct = await compare(pass, pass_hash);
    return is_correct;

}

export { encrypt, verify }