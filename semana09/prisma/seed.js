import { PrismaClient } from "./generated/prisma/client.js";

const prismaConnection = new PrismaClient();
const clientes = [
  {
    correo: "cliente1@gmail.com",
    direccion: "Los palitos 123",
    nombre: "Cliente 1",
    numeroDocumento: "10745867482",
    tipoDocumento: "RUC",
  },
  {
    correo: "cliente2@gmail.com",
    direccion: "Los Girasoles 1080",
    nombre: "Cliente 2",
    numeroDocumento: "73456823",
    tipoDocumento: "DNI",
  },
  {
    correo: "cliente3@gmail.com",
    direccion: "Av Las gaviotas 12",
    nombre: "Cliente 3",
    numeroDocumento: "28569846",
    tipoDocumento: "DNI",
  },
];
async function migrar() {
  // upsert > o actualiza o crea dependiendo de la condicion
  for (const cliente of clientes) {
    await prismaConnection.cliente.upsert({
      create: cliente,
      update: cliente,
      where: { numeroDocumento: cliente.numeroDocumento },
    });
  }
}

migrar()
  .then(() => {
    console.log("Ejecucion de los datos correcta");
  })
  .catch((e) => console.log(e));
