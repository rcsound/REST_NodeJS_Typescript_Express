// import { number } from "joi";
import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interface/user.interface";


const users_schema = new Schema<User>(
    {
        email: {
            type: String,
            required: true,
        },

        name: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            default: "Descripcion",

        },

        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps:true, // agrego la fecha en la que se creo y el horario en el que se creo
        versionKey:false,
    })

    const user_model = model("user", users_schema);
    export default user_model;