import { Router } from "express";
import * as UsuarioController from "../controllers/usuarios_controller.js";
import { validarAdmin, validarToken } from "../utils/validar_token.js";

export const usuarioRouter = Router();

//Nosotros podemos tener tanto middlewares necesitemos pero estos siempre tienen que tener un orden en especifico
usuarioRouter.post(
  "/registro",
  validarToken,
  validarAdmin,
  UsuarioController.registroUsuario
);

usuarioRouter.post("/login", UsuarioController.login);
