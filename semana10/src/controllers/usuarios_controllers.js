import { UsuarioModel } from "../models/usuarios.js";
import {
  cambiarPasswordSerializer,
  loginUsuarioSerializer,
  registrarUsuarioSerializer,
} from "./usuarios_serializer.js";
import { compareSync, genSaltSync, hashSync } from "bcrypt";
import JWT from "jsonwebtoken";

export const crearUsuario = async (req, res) => {
  const serializador = registrarUsuarioSerializer.safeParse(req.body);

  if (serializador.error) {
    return res.status(400).json({
      message: "Error al crear el usuario",
      content: serializador.error,
    });
  }

  const nuevoUsuario = await UsuarioModel.create(serializador.data);

  // cuando iteractuamos con la informacion de mongoose no solo retorna la data, sino que mucha otra informacion, entonces el metodo `toJSON` extrae SOLAMENTE la data y la convierte a un JSON para poder manipularla
  const usuario = nuevoUsuario.toJSON();

  // eliminamos la propiedad del json
  delete usuario.password;

  return res.status(201).json({
    message: "Usuario creado exitosamente",
    content: usuario,
  });
};

export const login = async (req, res) => {
  const serializador = loginUsuarioSerializer.safeParse(req.body);

  if (serializador.error) {
    return res.status(400).json({
      message: "Error al hacer el login",
      content: serializador.error,
    });
  }

  const usuarioEncontrado = await UsuarioModel.findOne({
    correo: serializador.data.correo,
  });

  if (!usuarioEncontrado) {
    return res.status(400).json({
      message: "Credenciales incorrectas",
    });
  }

  const password = usuarioEncontrado.password;

  const esLaPassword = compareSync(serializador.data.password, password);

  if (esLaPassword) {
    const token = JWT.sign(
      { usuarioId: usuarioEncontrado._id },
      process.env.JWT_SECRET_KEY
    );

    return res.json({
      message: "Bienvenido",
      content: token,
    });
  } else {
    return res.status(400).json({
      message: "Credenciales incorrectas",
    });
  }
};

export const cambiarPassword = async (req, res) => {
  const serializador = cambiarPasswordSerializer.safeParse(req.body);

  if (serializador.error) {
    return res.status(400).json({
      message: "Error al cambiar la password",
      content: serializador.error,
    });
  }

  const passwordHashed = req.user.password;

  const esLaPassword = compareSync(
    serializador.data.antiguaPassword,
    passwordHashed
  );

  if (esLaPassword) {
    const salt = genSaltSync();
    const nuevaPasswordHashed = hashSync(serializador.data.nuevaPassword, salt);

    // Ahora actualizamos el registro en la bd
    await UsuarioModel.updateOne(
      { _id: req.user._id },
      { password: nuevaPasswordHashed }
    );

    return res.json({
      message: "Password actualizada exitosamente",
    });
  } else {
    return res.status(403).json({
      message: "La antigua password es incorrecta",
    });
  }
};
