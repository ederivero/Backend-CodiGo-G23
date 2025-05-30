import express from "express";
import { connect } from "mongoose";
import { config } from "dotenv";
import { usuarioRouter } from "./routes/usuarios_routes.js";

config();

const servidor = express();
const PORT = process.env.PORT;

servidor.use(express.json());

servidor.use(usuarioRouter);

servidor.listen(PORT, async () => {
  try {
    await connect(process.env.MONGO_URL);

    console.log(`Servidor corriendo en http://127.0.0.1:${PORT}`);
  } catch (error) {
    console.error("Error al levantar el servidor");

    console.error(error.message);
  }
});
