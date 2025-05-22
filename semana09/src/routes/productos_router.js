import { Router } from "express";
import {
  crearProducto,
  listarProductos,
} from "../controllers/productos_controller.js";

export const productoRouter = Router();

productoRouter.route("/productos").post(crearProducto).get(listarProductos);
