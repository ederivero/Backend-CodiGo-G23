import { Router } from "express";
import {
  crearProducto,
  listarProductos,
  devolverProducto,
} from "../controllers/productos_controllers.js";

export const productoRouter = Router();

// Declaramos todas las rutas de nuestros controladores de productos
// Para utilizar el controlador solamente definimos la funcion mas no la llamamos porque la llamada se hara cuando realicen la peticion
// productoRouter.post("/productos", crearProducto);
// productoRouter.get("/productos", listarProductos);

// Si va a ser la misma ruta para dos metodos http
productoRouter.route("/productos").get(listarProductos).post(crearProducto);

// Para indicar un parametro que pueda cambiar colocamos ":"
productoRouter.route("/producto/:id").get(devolverProducto);
