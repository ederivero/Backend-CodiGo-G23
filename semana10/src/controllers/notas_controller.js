import { NotasModel } from "../models/notas.js";
import { crearNotaSerializer } from "./notas_serializer.js";

export const crearNota = async (req, res) => {
  const serializador = crearNotaSerializer.safeParse(req.body);

  if (serializador.error) {
    return res.status(400).json({
      message: "Error al crear la nota",
      content: serializador.error,
    });
  }

  const _id = req.user._id;
  const notaCreada = await NotasModel.create({
    ...serializador.data,
    usuarioId: _id,
  });

  return res.status(201).json({
    message: "Nota creada exitosamente",
    content: notaCreada,
  });
};
