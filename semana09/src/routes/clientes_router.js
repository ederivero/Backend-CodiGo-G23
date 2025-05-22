import { Router } from "express";
import * as clienteController from "../controllers/clientes_controller.js";

export const clientesRouter = Router();

clientesRouter.route("/clientes").post(clienteController.registrarCliente);
