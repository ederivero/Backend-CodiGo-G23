import { prisma } from "../cliente.js";
import {
  LoginSerializer,
  RegistroUsuarioSerializer,
} from "./usuarios_serializer.js";
import { hash, genSalt, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export const registroUsuario = async (req, res) => {
  const serializador = RegistroUsuarioSerializer.safeParse(req.body);

  if (serializador.error) {
    return res.status(400).json({
      message: "Error al crear el usuario",
      content: serializador.error,
    });
  }

  // Hashing de la password
  const salt = await genSalt();

  const password = await hash(serializador.data.password, salt);

  const usuarioCreado = await prisma.usuario.create({
    data: { ...serializador.data, password },
    // Para evitar retornar una columna del registro, se usa el omit
    omit: { password: true },
    // select: {}, // Select sirve para indicar que columnas voy a devolver
  });

  return res.status(201).json({
    message: "Usuario Creado exitosamente",
    conten: usuarioCreado,
  });
};

export const login = async (req, res) => {
  const serializador = LoginSerializer.safeParse(req.body);

  if (serializador.error) {
    return res.status(400).json({
      message: "Error al hacer el login",
      content: serializador.error,
    });
  }

  const usuarioEncontrado = await prisma.usuario.findFirst({
    where: { correo: serializador.data.correo },
  });

  if (!usuarioEncontrado) {
    return res.status(403).json({
      message: "Credenciales incorrectas",
    });
  }

  const validacionPassword = await compare(
    serializador.data.password,
    usuarioEncontrado.password
  );

  if (validacionPassword) {
    const token = sign(
      {
        usuarioId: usuarioEncontrado.id,
      },
      process.env.SECRET_JWT_KEY
    );
    return res.json({
      message: "Bienvenido",
      content: token,
    });
  } else {
    return res.status(403).json({
      message: "Credenciales incorrectas",
    });
  }
};
