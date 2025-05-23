from funciones import calcular_igv, numero_par_o_impar
from pytest import raises


def test_validar_igv():
    monto_inicial = 100
    resultado = calcular_igv(monto_inicial)
    # Sirve para poder validar si una condicion se cumple o no
    assert resultado == 18


def test_validar_igv_negativo():
    monto_inicial = -50
    resultado = calcular_igv(monto_inicial)
    assert resultado == -9


def test_monto_cero():
    monto_inicial = 0
    # Si queremos hacer una prueba y esta involucra que nuestro programa 'crashee'
    with raises(ValueError) as error:
        calcular_igv(monto_inicial)

    assert error.value.args == ('No se puede sacar el igv de 0',)

# para ejecutar el archivo de test no es como un archivo comun de python sino que se realiza mediante la libreria pytest
# pytest [NOMBRE_ARCHIVO] -v|--verbose
# verbose > mostrara de una manera mas detallada los resultados de los test y no solamente con un '.' o un F


# Generar al menos dos escenarios de test para la funcion numero_par_o_impar
def test_numero_par():
    numero = 10
    resultado = numero_par_o_impar(numero)
    assert resultado == 'Es par'


def test_numero_impar():
    numero = 17
    resultado = numero_par_o_impar(numero)
    assert resultado == 'Es impar'


def test_numero_cero():
    numero = 0
    resultado = numero_par_o_impar(numero)
    assert resultado == 'No se puede calcular'
