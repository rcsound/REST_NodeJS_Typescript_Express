import { Peli } from "../interface/peli.interface";
import peli_model from "../models/pelis";

const call_insert_pelis = async (peli: Peli) => {
    const response_insert = await peli_model.create(peli);
    return response_insert;
};

const call_get_pelis = async () => {
    const response_pelis = await peli_model.find({})
    return response_pelis;
}

const call_get_peli = async (id:string) => {
    const response_peli = await peli_model.findOne({id:id}) // no funciono cuando use peli_model.findOne({_id:id}) 
    console.log("Buscando");
    // console.log(response_pelis);
    return response_peli;
}

const call_update_peli = async (id:string, data:Peli) => {
    const update_peli = await peli_model.findOneAndUpdate({_id:id}, data, {new:true}) // no funciono cuando use peli_model.findOne({id:id}) 
    console.log("Updating Peli");
    // console.log(response_pelis);
    return update_peli;
}

const call_delete_peli = async (id:string) => {
    const response_peli = await peli_model.findOneAndDelete({_id:id}) // no funciono cuando use peli_model.findOne({_id:id}) 
    console.log("Borrando");
    // console.log(response_pelis);
    return response_peli;
}


export { call_get_pelis, call_insert_pelis, call_get_peli, call_update_peli, call_delete_peli }