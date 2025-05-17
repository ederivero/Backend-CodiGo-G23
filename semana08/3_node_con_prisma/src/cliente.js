// El cliente que crea la conexion y toda la documentacion de mi ORM es @prisma/client
// La otra libreria prisma solamente sirve para crear migraciones, el schema y ejecutar las migraciones
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
