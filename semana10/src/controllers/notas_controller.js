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

export const buscarNota = async (req, res) => {
  const variables = req.query;
  console.log(variables);
  // Como hacer para que solamente muestren las notas del usuario autenticado
  const usuario = req.user;

  // Cuando es un solo elemento podemos hacer una comparativa directa
  let notasEncontradas;
  if (variables.etiquetas) {
    if (Array.isArray(variables.etiquetas)) {
      // $in > solamente devolver las notas que contengan alguna de los valores del arreglo, es decir o Laboral u Ocio
      // $all > todos los valores del arreglo tienen que estar presentes
      // En ambos casos se puede utilizar una expresion regulara para hacer busquedas mas avanzadas como insensitive u otros
      notasEncontradas = await NotasModel.find({
        etiquetas: {
          $all: variables.etiquetas.map(
            (etiqueta) => new RegExp(`^${etiqueta}$`, "i")
          ),
        },
        usuarioId: usuario._id,
      });
    } else {
      notasEncontradas = await NotasModel.find({
        etiquetas: {
          $elemMatch: { $regex: variables.etiquetas, $options: "i" },
        },
        usuarioId: usuario._id,
      });
    }
  }
  return res.json({ content: notasEncontradas });
};
