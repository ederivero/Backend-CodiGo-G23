import express from "express";
import { productoRouter } from "./routes/productos_router.js";

const servidor = express();

// Nullish coalescing operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
const PORT = process.env.PORT ?? 3000;
servidor.use(express.json());

// Aca dejamos las rutas declaradas en nuestros routes
servidor.use(productoRouter);

servidor.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Servidor corriendo en http://127.0.0.1:${PORT}`);
});
