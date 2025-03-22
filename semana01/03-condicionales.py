# Boolean
edad = 30

if edad > 18:
    # Todo lo que vaya dentro de este bloque sera si cumple la condicion
    print('Eres mayor de edad')
else:
    print('Eres menor de edad')


# Todo lo que escriba aqui no cumplira con la condicion
print('fin del programa')

if 10 > 5 and 50 > 10:
    print('Estamos bien')


if 5 > 10 and 50 > 10:
    print('Estamos bien')

if 5 > 10 or 50 > 10:
    print('Al menos una esta bien')


mensaje = 'balblalb'

pais = 'Uruguay'

# = Asignacion
# == Comparacion
if pais == 'Peru':
    print('Peruano')
if pais == 'Venezuela':
    print('Venezolano')
if pais == 'Bolivia':
    print('Boliviano')
else:
    print('Latinoamericano')


numero = 30

# Si quiero agrupar un conjunto de if's entonces
if numero > 30:
    print('esta excelente')
elif numero > 25:
    print('esta muy bien')
elif numero > 20:
    print('esta ok')
else:
    print('esta mal')


# Tengo mi edad en la cual se debe cumplir las siguientes condiciones
# si es mayor de 18 entonces puede votar
# si es entre 15 y 17 entonces puede opinar
# si es entre 10 y 14 entonces puede esperar
# si es menor que 10 no puede asistir a la votacion
edad = 7

if edad >= 18:
    print('Puede votar')
elif edad >= 15:  # and edad < 18:
    print('Puede opinar')
elif edad >= 10:
    print('Puede esperar')
else:
    print('No puede asistir a la votacion')
