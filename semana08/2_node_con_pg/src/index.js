import express from "express";
import { config } from "dotenv";
import { productoRouter } from "./routers/productos_routers.js";
// Siempre en la primera linea de nuestro archivo principal para que pueda leer el archivo .env y cargarlo de manera global a todo el proyecto
config();

const servidor = express();

// Validara si existe la variable de entorno y si no usaremos el numero 3000
const PORT = process.env.PORT ?? 3000;

// Para poder leer el body en formato JSON
servidor.use(express.json());

servidor.get("/status", (req, res) => {
  const horaServidor = new Date();

  res.json({
    status: "Activo",
    hora: horaServidor,
  });
});

// Aca vamos a definir todas las rutas de los enrutadores
servidor.use(productoRouter);

servidor.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Servidor corriendo exitosamente en el puerto ${PORT}`);
  }
});
