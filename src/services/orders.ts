import { Peli } from "../interface/peli.interface";
import peli_model from "../models/pelis";

const call_get_orders = async () => {
    const response_pelis = await peli_model.find({})
    return response_pelis;
}

export { call_get_orders }