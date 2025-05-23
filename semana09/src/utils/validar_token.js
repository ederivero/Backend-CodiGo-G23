import JWT from "jsonwebtoken";
import { prisma } from "../cliente.js";
import { TipoUsuario } from "../../prisma/generated/prisma/client.js";

// Middleware >
export const validarToken = async (req, res, next) => {
  // El next sirve para indicarle que puede continuar con el siguiente controlador

  // Primero analizamos los headers
  //   const authorization = req.headers.authorization;
  const { authorization } = req.headers;

  // Nos aseguramos de tener el header de authorization donde se manda la token
  if (!authorization) {
    // 403 > Forbidden
    return res.status(403).json({
      message: "Necesitas una token para realizar esta peticion",
    });
  }

  // Bearer xxxxx.yyyyy.zzzzzz
  const token = authorization.split(" ")[1]; // ['Bearer', 'xxxxx.yyyyy.zzzz']
  if (!token) {
    return res.status(403).json({
      message: "La token tiene que ser enviada en el formato <Bearer TU_TOKEN>",
    });
  }

  try {
    const payload = JWT.verify(token, process.env.SECRET_JWT_KEY);

    console.log(payload);

    // Ahora como ya sabemos que el usuario ha sido correctamente identificado entonces procedemos a agregarlo al request para que los otros controladores o middlewares puedan utilizarlo
    // TODO: Agregar en el req.user toda la informacion del usuario
    const usuarioEncontrado = await prisma.usuario.findUniqueOrThrow({
      where: { id: payload.usuarioId },
    });
    req.user = usuarioEncontrado;

    // Para indicarle que hemos terminado en este middleware mandamos a llamar a la funcion next para que continue
    next();
  } catch (error) {
    // Ingresara al catch si la token es invalida, si ya expiro o si no es nuestra token
    return res.status(400).json({
      message: "Token invalida",
      content: error.message,
    });
  }
};

// Este middleware vendria luego del validarToken por lo que ya deberiamos de tener el req.user
export const validarAdmin = (req, res, next) => {
  const usuario = req.user;

  if (!usuario) {
    return res.status(400).json({
      message: "Usuario no encontrado",
    });
  }

  if (usuario.tipoUsuario === TipoUsuario.ADMIN) {
    next();
  } else {
    return res.status(403).json({
      message:
        "Usuario no cuenta con privilegios suficientes para realizar esta accion",
    });
  }
};
