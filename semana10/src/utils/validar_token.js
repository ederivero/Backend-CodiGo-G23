import JWT from "jsonwebtoken";
import { UsuarioModel } from "../models/usuarios.js";

export const validarToken = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(403).json({
      message: "Necesitas una token para realizar esta peticion",
    });
  }

  const token = authorization.split(" ")[1];
  if (!token) {
    return res.status(403).json({
      message: "La token tiene que ser enviada en el formato <Bearer TU_TOKEN>",
    });
  }

  try {
    const payload = JWT.verify(token, process.env.JWT_SECRET_KEY);

    const usuarioEncontrado = await UsuarioModel.findById(payload.usuarioId);

    if (!usuarioEncontrado) {
      throw new Error("Usuario no encontrado");
    }

    req.user = usuarioEncontrado;

    next();
  } catch (error) {
    return res.status(400).json({
      message: "Token invalida",
      content: error.message,
    });
  }
};
