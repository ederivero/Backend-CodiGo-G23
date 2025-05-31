import { Router } from "express";
import * as NotasController from "../controllers/notas_controller.js";
import { validarToken } from "../utils/validar_token.js";

export const notasRouter = Router();

notasRouter
  .route("/notas")
  .all(validarToken) // Si quiero usar un middleware o usar el mismo controlador en todos los metodos que puede tener esta ruta usare el all
  .post(NotasController.crearNota)
  .get(NotasController.buscarNota);
