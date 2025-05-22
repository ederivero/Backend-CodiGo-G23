import { z } from "zod";
import { TipoDocumento } from "../../prisma/generated/prisma/client.js";

export const registrarClienteSerializer = z.object({
  nombre: z.string(),
  direccion: z.string(),
  tipoDocumento: z.enum([
    TipoDocumento.DNI,
    TipoDocumento.CE,
    TipoDocumento.RUC,
  ]),
  numeroDocumento: z
    .string()
    .min(8, { message: "La longitud minima es de 8 caracteres" })
    .max(11, { message: "La longitud maxima es de 11 caracteres" }),
  correo: z.string().email({ message: "No es un formato valido" }),
});
