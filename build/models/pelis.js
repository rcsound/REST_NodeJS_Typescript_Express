"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { number } from "joi";
const mongoose_1 = require("mongoose");
const peli_schema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
    versionKey: false,
});
const peli_model = (0, mongoose_1.model)("pelis", peli_schema);
exports.default = peli_model;
