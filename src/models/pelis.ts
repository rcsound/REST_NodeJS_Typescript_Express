// import { number } from "joi";
import { Schema, Types, model, Model } from "mongoose";
import { Peli } from "../interface/peli.interface"


const peli_schema = new Schema<Peli>(
    {
        titulo: {
            type: String,
            required: true,
        },

        anio: {
            type: Number,
            required: true,
        },

        genero: {
            type: String,
            enum: ["accion", "aventuras", "para mamis y papis"],
            required: true,
        },

        resenia: {
            type: String,
            required: true,
        }
    },
    {
        timestamps:true, // agrego la fecha en la que se creo y el horario en el que se creo
        versionKey:false,
    })

    const peli_model = model("pelis", peli_schema)
    export default peli_model