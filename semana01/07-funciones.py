def calcular_igv():
    # Si bien la he definido al no utilizarla jamas se va a ejecutar
    print('Comienzo a calcular el IGV')

    print('Termine de calcularlo')


def calcular_interes(valor_neto, periodo, interes):
    print(valor_neto)


def sumatoria(numero1, numero2):
    resultado = numero1 + numero2

    return resultado


def saludar(nombre, mensaje='Buenos dias'):
    return '{} {}'.format(mensaje, nombre)


resultado = saludar('Maria')
print(resultado)

resultado = saludar('Pedro', 'Hola!')
print(resultado)


# si quiero recibir una cantidad infinita de valores en una funcion puedo usar el *
# args > arguments
def sumatoria_infinita(*args):
    total = 0
    for numero in args:
        # total = total + numero
        total += numero
    # hacer la suma de todos los numeros que se pasen en la funcion
    return total


sumatoria_infinita(10, 20, 30, 4.4, 58, 98, 123, 1, 2, 3)


# si quiero recibir n parametros PERO definiendo su nombre del parametro y su valor entonces usare el **
# cuando usamos doble ** estamos indicando que ahora podemos recibir n parametros con con su nombre del parametro
# kwargs > keyboard argument
def creacion_persona(**kwargs):
    # almacena la informacion como un diccionario en la cual el nombre del parametro sera la llave y su valor sera su valor
    print(kwargs)
    # en base ala creacion de persona quiero ver si me proveen o no me proveen el correo, si es que si, mostrar un mensaje, y si no indicar que falta esa llave requerida
    if 'correo' in kwargs.keys():
        print('Llave encontrada exitosamente')
    else:
        print('Falta el correo para creacion de persona')


creacion_persona(nombre='Eduardo', edad=31,
                 fecha_nacimiento='2000-01-01', contratado=False, correo='eduardo@gmail.com')
