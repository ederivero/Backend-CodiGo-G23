import { prisma } from "../cliente.js";
import {
  devolverArchivoDelBucket,
  devolverURLDeSubidaDelBucket,
  eliminarArchivoDelBucket,
  subirArchivoAlBucket,
} from "../utils/manejo_archivos_s3.js";
import { crearArchivoSerializer } from "./archivos_serializer.js";

export const subirArchivo = async (req, res) => {
  // Cuando usamos el middleware de multer y usamos el single esto agregara en nuestro req la propiedad file
  const archivo = req.file;
  console.log(archivo);

  await subirArchivoAlBucket({
    archivo: archivo.buffer,
    nombre: archivo.originalname,
    extension: archivo.mimetype,
    carpeta: "productos",
  });

  return res.status(201).json({
    message: "Archivo subido exitosamente",
  });
};

export const devolverArchivo = async (req, res) => {
  const url = await devolverArchivoDelBucket({
    carpeta: "productos",
    archivo: "alacena.jpeg",
  });

  return res.json({
    content: url,
  });
};

export const generarUrlDelBucket = async (req, res) => {
  const serializador = crearArchivoSerializer.safeParse(req.body);

  if (serializador.error) {
    return res.status(400).json({
      message: "Error al crear la URL",
      content: serializador.error,
    });
  }
  const { archivo, carpeta, productoId } = serializador.data;

  if (serializador.data.productoId) {
    // SELECT id FROM productos WHERE id = ...;
    await prisma.producto.findUniqueOrThrow({
      where: { id: productoId },
      select: { id: true },
    });
  }

  const url = await devolverURLDeSubidaDelBucket(serializador.data);

  // imagen.png > png
  const extension = archivo.split(".")[archivo.split(".").length - 1];
  // 01.xyz.jpg
  const nombre = archivo.split(".").slice(0, -1).join(".");

  await prisma.archivo.create({
    data: { extension, folder: carpeta, nombre, productoId },
  });

  return res.json({
    content: url,
  });
};

export const eliminarArchivo = async (req, res) => {
  const id = parseInt(req.params.id);

  const archivoEncontrado = await prisma.archivo.findUniqueOrThrow({
    where: { id },
  });

  try {
    await eliminarArchivoDelBucket({
      carpeta: archivoEncontrado.folder,
      archivo: `${archivoEncontrado.nombre}.${archivoEncontrado.extension}`,
    });

    await prisma.archivo.delete({ where: { id } });

    return res.json({
      message: "Archivo eliminado exitosamente",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al eliminar el archivo",
    });
  }
};
