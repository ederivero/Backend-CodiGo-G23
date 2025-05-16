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

export const actualizarProducto = async (req, res) => {
  const serializador = crearProductoSerializer.safeParse(req.body);
  const id = req.params.id;

  if (serializador.error) {
    return res.status(400).json({
      message: "Erro al actualizar el producto",
      content: serializador.error,
    });
  }

  // Destructuracion > obtener las llaves de un JSON en una variable independiente
  const { nombre, precio } = serializador.data;
  //   const nombre = serializador.data.nombre
  //   const precio = serializador.data.precio

  try {
    // Si queremos trabajar la instruccion en forma de una transaccion
    await conexion.query("BEGIN");
    const productoActualizado = await conexion.query(
      "UPDATE productos SET nombre=$1, precio=$2 WHERE id=$3 RETURNING *",
      [nombre, precio, id]
    );

    if (1 === 1) {
      // Hacemos una condicional que siempre va a ser verdadera para evitar que el codigo sea posiblemente accesible
      // Si queremos simular un error
      // throw Error("Error inesperado");
    }
    // Guardamos de manera permanente la modificacion de la informacion
    await conexion.query("COMMIT");

    if (!productoActualizado.rows[0]) {
      return res.status(400).json({
        message: "El producto a actualizar no existe",
      });
    }

    return res.json({
      message: "Producto actualizado exitosamente",
      content: productoActualizado.rows[0],
    });
  } catch (error) {
    // ROLLBACK > todoas las operaciones dentro de la transaccion son descartadas
    await conexion.query("ROLLBACK");
    // 500 > Internal server Error
    return res.status(500).json({
      message: "Occurio un error al hacer la operacion, intentelo nuevamente",
    });
  }
};

export const eliminarProducto = async (req, res) => {
  const { id } = req.params;
  // Hacer la eliminacion del producto
  const productoEliminado = await conexion.query(
    "DELETE FROM productos WHERE id =$1 RETURNING id",
    [id]
  );

  if (!productoEliminado.rows[0]) {
    return res.status(400).json({
      message: "El producto a eliminar no existe",
    });
  }

  return res.json({
    message: "Producto eliminado exitosamente",
  });
};
