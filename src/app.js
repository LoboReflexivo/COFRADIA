//Este es donde se crea el servidor

//si son modulos de otros sin la terminacion (.js)
import express from "express";
/*
Morgan sirve para ver por consola las peticiones
que van llegando al backend
(npm install morgan)
*/
import morgan from "morgan";
/*importo desde el archivo auth.routes 
con el nombre de authRoutes*/
import authRoutes from "./routes/auth.routes.js";

const app = express();

//usa el modulo morgan con la configuración "dev"
app.use(morgan("dev"));
/*
El backend no entiende los datos de JSON cuando nostoros creamos un servidor de express.
para ello tenemos que usar el metodo de express que transforma los req.body en formato JSON u objeto JavaScript y de esta forma el backend lo entienda.
*/
app.use(express.json());

/*despues que se ponga por consola la peticion de morgan
le pedimos que use el authRoutes
*/
app.use("/api", authRoutes); //le ponemos api para diferenciarlos del frontend

export default app;
