"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { number } from "joi";
const mongoose_1 = require("mongoose");
const users_schema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
    versionKey: false,
});
const user_model = (0, mongoose_1.model)("user", users_schema);
exports.default = user_model;
