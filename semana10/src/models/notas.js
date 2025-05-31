import { Schema, model } from "mongoose";

const NotasSchema = Schema({
  nombre: {
    type: Schema.Types.String,
    required: true,
    trim: true, // Elimina los espacios al comienzo y al final del texto
  },
  descripcion: {
    type: Schema.Types.String,
    trim: true,
  },
  orden: {
    type: Schema.Types.Int32,
    min: 0,
  },
  etiquetas: {
    type: Schema.Types.Array,
    default: [],
  },
  usuarioId: {
    type: Schema.Types.ObjectId,
    required: true,
    alias: "usuario_id", // indicar que en la bd el nombre va a ser otro
  },
});

export const NotasModel = model("notas", NotasSchema);
