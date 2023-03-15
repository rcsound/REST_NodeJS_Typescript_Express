"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.call_get_orders = void 0;
const pelis_1 = __importDefault(require("../models/pelis"));
const call_get_orders = async () => {
    const response_pelis = await pelis_1.default.find({});
    return response_pelis;
};
exports.call_get_orders = call_get_orders;
