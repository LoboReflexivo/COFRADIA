//Aquí es donde se va a llamar a todo, la db, el servidor, etc.
//Es que encargado de arrancar todo

import app from "./app.js"; //si importamos nuestros propios modulos, se le añade JS
import { connectDB } from "./db.js";

connectDB();
app.listen(3000);

console.log("server on port", 3000);
