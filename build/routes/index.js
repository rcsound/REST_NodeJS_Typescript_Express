"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const fs_1 = require("fs");
const PATH_ROUTER = `${__dirname}`; // Nos devuelve la ruta del directorio actual
const router = (0, express_1.Router)();
exports.router = router;
const cleanFilename = (__filename) => {
    const file = __filename.split('.').shift(); // Le saco la extension para que quede solamente el nombre, que va a ser compatible con el formato de la ruta/endpoint
    return file;
};
(0, fs_1.readdirSync)(PATH_ROUTER).filter((__filename) => {
    var _a;
    const clean_name = cleanFilename(__filename);
    if (clean_name !== "index") {
        (_a = `./${clean_name}`, Promise.resolve().then(() => __importStar(require(_a)))).then((module_router) => {
            console.log(`Se esta cargando la ruta... /${clean_name}`);
            router.use(`/${clean_name}`, module_router.router);
        });
        console.log(cleanFilename(__filename));
    }
}); // Estoy filtrando el index como nombre para armar dinamicamente la guia de rutas/endpoints
