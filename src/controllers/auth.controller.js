//Si solo importa uno, sin llaves
import Hermano from "../models/hermano.model.js";

export const register = async (req, res) => {
  const { nombre, apellidos, email, direccion, clave, telefono, role } =
    req.body;
  try {
    const newHermano = new Hermano({
      nombre,
      apellidos,
      email,
      clave,
      telefono,
      direccion,
      role,
    });
    console.log(newHermano);

    const userSaved = await newHermano.save();

    res.json(userSaved);
    res.send("Nuevo hermano en la cofradía");
  } catch (error) {
    res.send(error);
    console.log(error);
    console.log("Hubo un error");
  }
};

export const login = (req, res) => {
  res.send("login");
};
