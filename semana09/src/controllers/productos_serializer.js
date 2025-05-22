import { z } from "zod";

export const ProductoSerializer = z.object({
  nombre: z.string(),
  descripcion: z.string().optional(),
  precio: z.number().gte(0, { message: "El precio debe ser positivo" }),
  disponible: z.boolean().default(true),
  cantidad: z.number().gte(0, { message: "La cantidad debe ser positiva" }),
});
