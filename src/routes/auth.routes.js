import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", register);

router.post("/login", login);

/*
Exportamos el router las rutas se tienen que añadir a la app.js
*/
export default router;
