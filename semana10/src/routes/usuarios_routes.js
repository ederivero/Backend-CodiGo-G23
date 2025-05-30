import { Router } from "express";
import * as UsuariosController from "../controllers/usuarios_controllers.js";
import { validarToken } from "../utils/validar_token.js";

export const usuarioRouter = Router();

usuarioRouter.post("/registro", UsuariosController.crearUsuario);
usuarioRouter.post("/login", UsuariosController.login);
usuarioRouter.post(
  "/cambiar-password",
  validarToken,
  UsuariosController.cambiarPassword
);
