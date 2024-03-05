//Este es donde se crea el servidor

import express from "express"; //si son modulos de otros sin la terminacion (.js)
import morgan from "morgan";
/*
Morgan sirve para ver por consola las peticiones
que van llegando al backend
(npm install morgan)
*/

const app = express();

app.use(morgan("dev"));
//usa el modulo morgan con la configuración "dev"

export default app;
