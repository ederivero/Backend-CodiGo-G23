import { z } from "zod";

export const crearProductoSerializer = z.object({
  nombre: z.string({ required_error: "El nombres es obligatorio" }),
  // gt > greather than
  precio: z.number().gt(0, { message: "El precio debe ser positivo" }),
});
