import { Router } from "express";
import * as clienteController from "../controllers/clientes_controller.js";
import { validarToken } from "../utils/validar_token.js";

export const clientesRouter = Router();

// Importa mucho el orden con el cual llamemos a nuestro controladores/middlewares
clientesRouter
  .route("/clientes")
  .post(validarToken, clienteController.registrarCliente);
