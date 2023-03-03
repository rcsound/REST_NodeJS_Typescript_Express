import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`; // Nos devuelve la ruta del directorio actual
const router = Router();

const cleanFilename = (__filename: string) => {
    const file = __filename.split('.').shift(); // Le saco la extension para que quede solamente el nombre, que va a ser compatible con el formato de la ruta/endpoint
    return file;
}

readdirSync(PATH_ROUTER).filter((__filename) => {
    const clean_name = cleanFilename(__filename);
    if (clean_name !== "index"){
        import(`./${clean_name}`).then((module_router) => {  // Lo que hacemos es dinamicamente pedir las rutas de los archivos que vamos a armando en la carpeta Routes
            console.log(`Se esta cargando la ruta... /${clean_name}`)
            router.use(`/${clean_name}`, module_router.router)
        });
        console.log(cleanFilename(__filename));
    }
}); // Estoy filtrando el index como nombre para armar dinamicamente la guia de rutas/endpoints

export { router }; 