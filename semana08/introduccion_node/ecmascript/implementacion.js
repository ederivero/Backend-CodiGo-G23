// No se puede utilizar una importacion de todo, solamente se puede si tenemos una exportacion x defecto
// import data from "./funciones.js";
import * as data from "./funciones.js";

// Utilizando la destructuracion
// Obtener las llaves de un JSON en cada variable separada sin la necesidad de importar todas las funciones, variables, etc de ese archivo/libreria
import { esPositivo, parImpar } from "./funciones.js";

const resultado1 = data.esPositivo(10);
console.log(resultado1);

const resultado2 = esPositivo(10);
console.log(resultado2);
