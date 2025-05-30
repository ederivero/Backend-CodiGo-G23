import { Router } from "express";
import { crearNota } from "../controllers/notas_controller.js";
import { validarToken } from "../utils/validar_token.js";

export const notasRouter = Router();

notasRouter.route("/notas").post(validarToken, crearNota);
