import mongoose from "mongoose";

export const direccionSchema = new Schema({
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
  pais: String,
});
