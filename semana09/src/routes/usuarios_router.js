import { Router } from "express";
import * as UsuarioController from "../controllers/usuarios_controller.js";

export const usuarioRouter = Router();

usuarioRouter.post("/registro", UsuarioController.registroUsuario);

usuarioRouter.post("/login", UsuarioController.login);
