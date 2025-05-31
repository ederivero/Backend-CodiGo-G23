import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const servidor = http.createServer(app);
const socket = new Server(servidor);
const PORT = process.env.PORT;

servidor.listen(PORT, () => {
  console.log(
    `Servidor corriendo exitosamente en el puerto http://127.0.0.1:${PORT}`
  );
});
