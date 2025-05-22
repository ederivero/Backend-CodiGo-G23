// El cliente que crea la conexion y toda la documentacion de mi ORM es la ubicacion donde indique el output en el schema.prisma
// La otra libreria prisma solamente sirve para crear migraciones, el schema y ejecutar las migraciones
import { PrismaClient } from "../prisma/generated/prisma/client.js";

export const prisma = new PrismaClient();
