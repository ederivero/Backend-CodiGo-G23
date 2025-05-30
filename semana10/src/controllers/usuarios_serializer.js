import { z } from "zod";

export const registrarUsuarioSerializer = z.object({
  nombre: z.string(),
  correo: z.string().email({ message: "Formato invalido" }),
  password: z
    .string()
    .regex(
      new RegExp(
        "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,}$"
      ),
      {
        message:
          "El password debe tener al menos una mayus, una minus, un numero y un caracter especial",
      }
    ),
});

export const loginUsuarioSerializer = z.object({
  correo: z.string(),
  password: z.string(),
});

export const cambiarPasswordSerializer = z.object({
  antiguaPassword: z.string(),
  nuevaPassword: z.string(),
});
