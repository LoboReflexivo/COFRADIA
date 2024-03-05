import mongoose from "mongoose";
import { direccionSchema } from "./direccion.model";

const hermanosSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true, //para quitar los espacios de delante y detras
  },
  apellidos: {
    type: String,
    required: true,
    trim: true, //para quitar los espacios de delante y detras
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  clave: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  direccion: direccionSchema,
  rol: {
    type: String,
    enum: ["usuario", "admin"],
    default: "usuario",
  },
});

export default mongoose.model("hermano", hermanosSchema);
