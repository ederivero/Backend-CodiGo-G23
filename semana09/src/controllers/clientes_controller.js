import { prisma } from "../cliente.js";
import { registrarClienteSerializer } from "./clientes_serializer.js";

export const registrarCliente = async (req, res) => {
  const serializador = registrarClienteSerializer.safeParse(req.body);

  if (serializador.error) {
    return res.status(400).json({
      message: "Error al crear el cliente",
      content: serializador.error,
    });
  }

  const clienteCreado = await prisma.cliente.create({
    data: serializador.data,
  });

  return res.status(201).json({
    message: "Cliente creado exitosamente",
    content: clienteCreado,
  });
};
