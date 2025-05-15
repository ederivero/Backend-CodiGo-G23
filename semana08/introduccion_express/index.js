import express from "express";

const servidor = express();
const PORT = 3000;

// Indicar que vamos a recibir en el body para que lo pueda entender
// use > es un middleware que sirve para interceptar todas las peticiones y hacerles una modificacion antes de continuar con el controlador correspondiente
// Ahora podremos entender la informacion por el body en un formato JSON
servidor.use(express.json());

// Asi podemos crear un nuevo controlador con su ruta
servidor.get("/", (req, res) => {
  console.log(req.body);
  return res.json({ message: "Bienvenido a mi API" });
});

servidor.post("/obtener-datos", (req, res) => {
  console.log(req.body);

  // Si no quisieramos enviar nada .send()
  // return res.status(201).send()

  // Para modificar el estado de respuesta status()
  return res.status(201).json({ message: "Registro exitoso" });
});

// Levantamos nuestro servidor
servidor.listen(PORT, (error) => {
  if (error) {
    console.log("Hubo un error");
  } else {
    console.log(`Servidor corriendo http://127.0.0.1:${PORT}`);
  }
});
