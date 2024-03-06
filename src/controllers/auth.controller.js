// Importación de funciones y modelos necesarios para el registro y login de hermanos
import { createAccessToken } from "../libs/jwt.js"; // Importa la función para crear tokens de acceso
import Hermano from "../models/hermano.model.js"; // Importa el modelo de Hermano
import bcrypt from "bcryptjs"; // Importa la librería bcrypt para encriptar contraseñas

// Constantes para mensajes de éxito y error
const SUCCESS_MESSAGE_REGISTER = "Hermano registrado correctamente"; // Mensaje de éxito para el registro de hermano
const SUCCESS_MESSAGE_LOGIN = "Hermano logueado correctamente"; // Mensaje de éxito para el login de hermano
const ERROR_MESSAGE = "Hubo un error al registrar al hermano"; // Mensaje de error genérico

// Controlador para registrar un nuevo hermano
export const register = async (req, res) => {
  const { nombre, apellidos, email, direccion, clave, telefono, role } =
    req.body; // Extrae los datos del cuerpo de la solicitud
  try {
    // Hash de la contraseña
    const passwordHash = await bcrypt.hash(clave, 10); // Genera un hash de la contraseña con sal de 10 caracteres

    // Crear un nuevo objeto Hermano con la contraseña hasheada
    const newHermano = new Hermano({
      nombre,
      apellidos,
      email,
      clave: passwordHash,
      telefono,
      direccion,
      role,
    });

    // Guardar el nuevo hermano en la base de datos
    const hermanoSaved = await newHermano.save();

    // Crear token de acceso con el ID del hermano guardado
    const token = await createAccessToken({ id: hermanoSaved._id });

    // Configurar token en una cookie de la respuesta
    res.cookie("token", token);

    // Enviar una respuesta de éxito con los datos del hermano guardado
    res.status(201).json({
      message: SUCCESS_MESSAGE_REGISTER,
      id: hermanoSaved._id,
      nombre: hermanoSaved.nombre,
      apellidos: hermanoSaved.apellidos,
      email: hermanoSaved.email,
    });
  } catch (error) {
    // Si ocurre un error, enviar una respuesta de error y registrar el error en la consola
    console.error("Error al registrar al hermano:", error);
    res.status(500).json({ message: ERROR_MESSAGE, error: error.message });
  }
};

// Controlador para el login de hermano
export const login = async (req, res) => {
  const { email, clave } = req.body; // Extrae el email y la contraseña del cuerpo de la solicitud
  try {
    const hermanoEncontrado = await Hermano.findOne({ email }); // Busca al hermano por su email en la base de datos

    // Si no se encuentra al hermano, enviar un mensaje de error
    if (!hermanoEncontrado)
      return res.status(400).json({ messsage: "hermano not found" });

    // Compara la contraseña ingresada con la contraseña almacenada
    const isMatch = await bcrypt.compare(clave, hermanoEncontrado.clave);

    // Si las contraseñas no coinciden, enviar un mensaje de error
    if (!isMatch)
      return res.status(400).json({ message: "Credencial inválida" });

    // Crear token de acceso con el ID del hermano encontrado
    const token = await createAccessToken({ id: hermanoEncontrado._id });

    // Configurar token en una cookie de la respuesta
    res.cookie("token", token);

    // Enviar una respuesta de éxito con los datos del hermano logueado
    res.status(201).json({
      message: SUCCESS_MESSAGE_LOGIN,
      hermano: hermanoEncontrado,
    });
  } catch (error) {
    // Si ocurre un error, enviar una respuesta de error y registrar el error en la consola
    console.error("Error al loguearse:", error);
    res.status(500).json({ message: ERROR_MESSAGE, error: error.message });
  }
};

// Controlador para el logout de hermano
export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  }); // Elimina la cookie de token de la respuesta
  return res.sendStatus(200); // Envía una respuesta de éxito con el código 200
};
