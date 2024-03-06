// Importa el módulo 'mongoose' para interactuar con la base de datos MongoDB
import mongoose from "mongoose";

// Define el esquema para la dirección
const direccionSchema = new mongoose.Schema(
  {
    // Define el campo 'calle' como una cadena de texto requerida
    calle: {
      type: String,
      required: true,
    },
    // Define el campo 'codigoPostal' como una cadena de texto requerida
    codigoPostal: {
      type: String,
      required: true,
    },
    // Define el campo 'localidad' como una cadena de texto requerida
    localidad: {
      type: String,
      required: true,
    },
    // Define el campo 'provincia' como una cadena de texto requerida
    provincia: {
      type: String,
      required: true,
    },
    // Define el campo 'pais' como una cadena de texto requerida
    pais: {
      type: String,
      required: true,
    },
  },
  {
    // Habilita los campos 'createdAt' y 'updatedAt' automáticamente
    timestamps: true,
  }
);

// Define el esquema para el hermano
const hermanoSchema = new mongoose.Schema(
  {
    // Define el campo 'nombre' como una cadena de texto requerida
    nombre: {
      type: String,
      required: true,
      trim: true, //para quitar los espacios de delante y detras
    },
    // Define el campo 'apellidos' como una cadena de texto requerida
    apellidos: {
      type: String,
      required: true,
      trim: true, //para quitar los espacios de delante y detras
    },
    // Define el campo 'email' como una cadena de texto requerida y única
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    // Define el campo 'clave' como una cadena de texto requerida
    clave: {
      type: String,
      required: true,
    },
    // Define el campo 'telefono' como una cadena de texto requerida
    telefono: {
      type: String,
      required: true,
    },
    // Define el campo 'direccion' utilizando el esquema 'direccionSchema' definido anteriormente
    direccion: direccionSchema,
    // Define el campo 'role' como una cadena de texto con valores predefinidos ('usuario' o 'admin') y con valor por defecto 'usuario'
    role: {
      type: String,
      enum: ["usuario", "admin"],
      default: "usuario",
    },
  },
  {
    // Habilita los campos 'createdAt' y 'updatedAt' automáticamente
    timestamps: true,
  }
);

// Exporta el modelo 'hermano' basado en el esquema 'hermanoSchema' para su uso en otras partes de la aplicación
export default mongoose.model("hermano", hermanoSchema);
