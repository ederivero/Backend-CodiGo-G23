import { ProductoSerializer } from "./productos_serializer.js";
import { prisma } from "../cliente.js";
import { devolverArchivoDelBucket } from "../utils/manejo_archivos_s3.js";

export const crearProducto = async (req, res) => {
  const data = req.body;
  const serializador = ProductoSerializer.safeParse(data);

  if (serializador.error) {
    return res.json({
      message: "Error al crear el producto",
      content: serializador.error,
    });
  }
  // INSERT INTO productos (...) VALUES (...);
  const nuevoProducto = await prisma.producto.create({
    data: serializador.data,
    // {
    //   cantidad: serializador.data.cantidad,
    //   nombre: serializador.data.nombre,
    // },
  });

  return res.status(201).json({
    message: "Producto creado exitosamente",
    content: nuevoProducto,
  });
};

export const listarProductos = async (req, res) => {
  const productos = await prisma.producto.findMany({
    include: { archivos: true },
  });

  const resultado = [];
  for (const producto of productos) {
    const productoModificado = { ...producto };
    productoModificado.archivos = [];

    if (producto.archivos.length > 0) {
      for (const archivo of producto.archivos) {
        const url = await devolverArchivoDelBucket({
          carpeta: archivo.folder,
          archivo: `${archivo.nombre}.${archivo.extension}`,
        });
        productoModificado.archivos.push(url);
      }
    }

    resultado.push(productoModificado);
  }

  return res.json({
    content: resultado,
  });
};
