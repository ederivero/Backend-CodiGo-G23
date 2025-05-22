import { z } from "zod";
import { TipoUsuario } from "../../prisma/generated/prisma/client.js";

export const RegistroUsuarioSerializer = z.object({
  nombre: z.string(),
  correo: z.string().email(),
  password: z
    .string()
    .regex(
      new RegExp(
        "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,}$"
      ),
      {
        message:
          "El password debe tener al menos una mayus, al menos una minus, un numero y un caracter especial",
      }
    ),
  tipoUsuario: z.enum([TipoUsuario.ADMIN, TipoUsuario.CAJERO], {
    message: "El tipoUsuario solo puede ser ADMIN o CAJERO",
  }),
});

export const LoginSerializer = z.object({
  correo: z.string().email({ message: "Correo con formato invalido" }),
  password: z.string(),
});
