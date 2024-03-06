import mongoose from "mongoose";

const direccionSchema = new mongoose.Schema(
  {
    calle: {
      type: String,
      required: true,
    },
    codigoPostal: {
      type: String,
      required: true,
    },
    localidad: {
      type: String,
      required: true,
    },
    provincia: {
      type: String,
      required: true,
    },
    pais: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const hermanosSchema = new mongoose.Schema(
  {
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
    role: {
      type: String,
      enum: ["usuario", "admin"],
      default: "usuario",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("hermano", hermanosSchema);
