// Variables globales que existen en TOOODO el archivo
const nombre = 'Eduardo'
let edad = 32

edad = 33

edad = 35

edad = 'cuarenta y dos'
edad = false

function sumar(numero1, numero2){
    // El uso del ; es completamente opcional y no modificara el comportamiento del programa
    // Variables locales que solo existen dentro de la funcion 
    const resultado = numero1 + numero2

    return resultado;
}

const sumatoria = sumar(10,5)

console.log(sumatoria)

// JS es recontra flexible tanto asi que si queremos 'sumar' un str y un numero hara la concatenacion y no la sumatoria
const sumatoria2 = sumar('a',80)
console.log(sumatoria2)


// Las funciones tambien pueden definirse de manera anonima!
// Las funciones anonimas son de tipo flecha
const restar = (numero1, numero2) => {
    const resultado = numero1 - numero2
    return resultado
}

const resta = restar(20,10)
console.log(resta)

// hoisting > en las funciones 'tradicionales' son eleveadas al inicio del contexto de ejecucion (si primero llamamos a la ejecucion de la funcion y luego a la declaracion se podra)
saludar('juancito')
function saludar (nombre) {
    return `Hola ${nombre}`
}

saludar2('pedrito')
const saludar2 = (nombre) => {
    return `Hola ${nombre}`
}