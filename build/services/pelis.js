"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.call_delete_peli = exports.call_update_peli = exports.call_get_peli = exports.call_insert_pelis = exports.call_get_pelis = void 0;
const pelis_1 = __importDefault(require("../models/pelis"));
const call_insert_pelis = async (peli) => {
    // console.log("Llegamos al Servicio")
    const response_insert = await pelis_1.default.create(peli);
    // console.log("insertamos la peli")
    return response_insert;
};
exports.call_insert_pelis = call_insert_pelis;
const call_get_pelis = async () => {
    const response_pelis = await pelis_1.default.find({});
    return response_pelis;
};
exports.call_get_pelis = call_get_pelis;
const call_get_peli = async (id) => {
    const response_peli = await pelis_1.default.findOne({ id: id }); // no funciono cuando use peli_model.findOne({_id:id}) 
    console.log("Buscando");
    // console.log(response_pelis);
    return response_peli;
};
exports.call_get_peli = call_get_peli;
const call_update_peli = async (id, data) => {
    const update_peli = await pelis_1.default.findOneAndUpdate({ _id: id }, data, { new: true }); // no funciono cuando use peli_model.findOne({id:id}) 
    console.log("Updating Peli");
    // console.log(response_pelis);
    return update_peli;
};
exports.call_update_peli = call_update_peli;
const call_delete_peli = async (id) => {
    const response_peli = await pelis_1.default.findOneAndDelete({ _id: id }); // no funciono cuando use peli_model.findOne({_id:id}) 
    console.log("Borrando");
    // console.log(response_pelis);
    return response_peli;
};
exports.call_delete_peli = call_delete_peli;
