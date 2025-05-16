import { crearProductoSerializer } from "./serializers/productos_serializers.js";
import conexion from "../conexion.js";

export const crearProducto = async (req, res) => {
  const serializador = crearProductoSerializer.safeParse(req.body);

  if (serializador.error) {
    return res.json({
      message: "Error al crear el producto",
      content: serializador.error,
    });
  }

  const dataValidada = serializador.data;
  // Para yo declarar valores en formato de variables en sql utilizo el '$'
  const nuevoProducto = await conexion.query(
    "INSERT INTO productos (nombre, precio) VALUES ($1, $2) RETURNING *",
    [dataValidada.nombre, dataValidada.precio]
  );
  console.log(nuevoProducto);
  console.log(dataValidada);
  // Las filas que retorna de la base de datos
  console.log(nuevoProducto.rows);
  return res.json({
    message: "Producto creado exitosamente",
  });
};

export const listarProductos = async (req, res) => {
  const productos = await conexion.query("SELECT * FROM productos");

  console.log(productos.rows);
  return res.json({
    content: productos.rows,
  });
};

export const devolverProducto = async (req, res) => {
  const id = req.params.id;
  const productoEncontrado = await conexion.query(
    "SELECT * FROM productos WHERE id = $1 LIMIT 1",
    [id]
  );

  if (productoEncontrado.rows[0] === undefined) {
    return res.status(404).json({
      message: "Producto no encontrado",
    });
  }

  return res.json({
    content: productoEncontrado.rows[0],
  });
};
