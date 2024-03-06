import { Router } from "express";
import { login, logout, register } from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

/*
Exportamos el router las rutas se tienen que añadir a la app.js
*/
export default router;
