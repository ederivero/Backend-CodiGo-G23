// Asi inicializamos nuestro cliente de socket.io
const socket = io("http://127.0.0.1:3000");
const form = document.getElementById("formulario");
const input = document.getElementById("input");
const mensajes = document.getElementById("mensajes");
const titulo = document.getElementById("titulo");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit("mensaje", input.value);
    input.value = "";
  }
});

socket.on("connect", () => {
  console.log(
    "El id de mi cliente creado cuando se conecto al back es:",
    socket.id
  );
  titulo.textContent = `Tu ID del servidor es ${socket.id}`;
});

// Nosotros emitimos un evento mediante un nombre determinado y el contenido que deseemos
socket.emit("identificacion", "Hola mi nombre es eduardo!");

socket.on("aviso", (data) => {
  console.log(data);
});

socket.on("mensaje", (msj) => {
  const item = document.createElement("li");
  item.textContent = `${msj.cliente} dice: ${msj.mensaje}`;

  mensajes.appendChild(item);
});
