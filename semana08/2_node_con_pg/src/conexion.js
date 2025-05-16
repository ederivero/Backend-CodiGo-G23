import { Client } from "pg";
import { config } from "dotenv";
config();
// Si queremos hacer solo una exportacion en nuestro archivo podemos hacer una exportacion x defecto para evitar hacer una destructuracion en la importacion
// import conexion from './conexion.js';

// Sin exportacion por defecto
// import {conexion} from './conexion.js';

const cliente = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

// Este el metodo que sirve para conectarnos con la base de datos, el otro solo crea el cliente a conectarse
cliente.connect((error) => {
  // Si hay algun error al conectarse con la base de datos lo emitiremos, caso contrario no deberiamos lanzar el error
  if (error) {
    throw error;
  }
});

export default cliente;
