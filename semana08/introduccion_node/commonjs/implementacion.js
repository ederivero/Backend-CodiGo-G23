// En commonJS es OBLIGATORIO declara la extension del archivo, si no lo declaramos Node lo tomara como si fuese una libreria y lanzara un error al no encontrarla
// Sin usar la destructuracion
const data = require("./funciones.js");
// Utilizando la destructuracion
// Obtener las llaves de un JSON en cada variable separada sin la necesidad de importar todas las funciones, variables, etc de ese archivo/libreria
const { esPositivo, parImpar } = require("./funciones.js");

const resultado1 = data.esPositivo(10);
console.log(resultado1);

const resultado2 = esPositivo(10);
console.log(resultado2);
