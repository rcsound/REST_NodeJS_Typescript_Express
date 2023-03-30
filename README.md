Para poder correr la API REST necesitas tener instalado:
- NodeJs v18.14.0
- npm v9.5.0 from
https://nodejs.org/en



DEPENDENCIES
- "bcryptjs": "2.4.2",
- "cors": "^2.8.5",
- "dotenv": "^16.0.3",
- "express": "^4.18.2",
- "jsonwebtoken": "9.0.0",
- "mongo": "^0.1.0",
- "mongoose": "^6.10.0",
- "multer": "^1.4.5-lts.1",
- "node-fetch": "^3.3.1",
- "ts-jest-resolver": "^2.0.1"

instalar en terminal usando "npm i 'dependencia@version'" // ejemplo "npm i bcrypts@2.4.2"



DEV DEPENDENCIES
- "@babel/core": "^7.21.3",
- "@babel/preset-env": "^7.20.2",
- "@babel/preset-typescript": "^7.21.0",
- "@types/bcryptjs": "2.4.2",
- "@types/cors": "^2.8.13",
- "@types/dotenv": "^8.2.0",
- "@types/express": "^4.17.17",
- "@types/jest": "^29.5.0",
- "@types/jsonwebtoken": "9.0.0",
- "@types/mongoose": "^5.11.97",
- "@types/multer": "^1.4.7",
- "babel-jest": "^29.5.0",
- "jest": "^29.5.0",
- "node-mocks-http": "^1.12.2",
- "nodemon": "^2.0.21",
- "ts-jest": "^29.0.5",
- "ts-node": "^10.9.1",
- "typescript": "^4.9.5"

instalar en terminal usando,  "npm i 'devdependencia@version' -D" // ejemplo "npm i @babel/core@7.21.3 -D"



MONGO_DB v6.0.4
from https://www.mongodb.com/download-center/community/releases/archive


Ejecucion:
1- Para poner en funcionamiento la base de datos en terminal ejeutar
"mongo"
2 - Dentro del entorno virtual ejecutar , "npm run dev" para inicializar la API y monitorearla en tiempo de ejecucion (?)
3 - al recibir el mensaje "Connection Ready" la API esta funcionando

NOTA - Por defecto la API funciona sobre el puerto 3003, para modificarlo ver las variables de entorno en ./.env


