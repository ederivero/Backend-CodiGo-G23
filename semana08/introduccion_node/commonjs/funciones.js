const parImpar = (numero) => {
  //   if (numero % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // Podemos utilizar operadores ternarios
  // CONDICION ? RESULTADO_VERDADERO : RESULTADO_FALSO
  return numero % 2 === 0 ? true : false;
};

// Las funciones anonimas si solamente voy a utilizar una linea y voy a retornar el resultado
const esPositivo = (numero) => (numero >= 0 ? true : false);
