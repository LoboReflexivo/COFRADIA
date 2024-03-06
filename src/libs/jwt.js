import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const createAccessToken = async (payload) => {
  try {
    // Crear y retornar el token JWT
    return jwt.sign(payload, TOKEN_SECRET, { expiresIn: "1d" });
  } catch (error) {
    // Lanzar una excepción si ocurre un error durante la creación del token
    throw new Error("Error al crear el token de acceso: " + error.message);
  }
};
