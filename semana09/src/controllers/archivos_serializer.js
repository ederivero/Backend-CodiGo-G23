import { z } from "zod";

export const crearArchivoSerializer = z.object({
  archivo: z.string(),
  mimetype: z.string(),
  carpeta: z.string().optional(),
  productoId: z.number().optional(),
});
