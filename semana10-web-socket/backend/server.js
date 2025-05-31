import express from "express";
import http from "http";
import { Server } from "socket.io";
import { config } from "dotenv";
config();

const app = express();
const servidor = http.createServer(app);
// Asi como en node tenemos que configurar los CORS para que se puedan conectar el cliente con nuestra API tbn debemos hacer lo mismo para el servidor de socket.io
const socket = new Server(servidor, { cors: { origin: "*" } });
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    message: "Bienvenido a mi API",
  });
});

// Este evento se desencadena cuando el cliente se conecta al servidor de socket.io
socket.on("connection", (usuario) => {
  //   console.log(usuario); // La informacion del cliente que se ha conectado

  usuario.on("identificacion", (data) => {
    console.log(data);
    // cuando quiero emitir un evento uso el usuario conectado en vez del servidor del socket este evento SOLO se enviara al usuario conectado y no a los otros usuarios
    socket.emit("aviso", "Ah ingresado un nuevo usuario!");
  });

  usuario.on("mensaje", (msj) => {
    console.log("Nos llego un mensaje!");
    socket.emit("mensaje", { mensaje: msj, cliente: usuario.id });
  });
});

servidor.listen(PORT, () => {
  console.log(
    `Servidor corriendo exitosamente en el puerto http://127.0.0.1:${PORT}`
  );
});
