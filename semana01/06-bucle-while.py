numero = 20

while numero > 0:
    print(numero)
    # numero = numero - 1
    numero -= 1

teclado = input('Ingrese un numero del 1 al 10: ')
# todo valor ingresado por el teclado SIEMPRE va a ser string
# para convertir ese valor a un int, float, bool, etc
print(int(teclado))
print(teclado)

# Adivina el numero
numero = 5

# El usuario tiene que ingresar un numero del 1 al 10
# si el numero ingresado es el correcto entonces termina el while, caso contrario va a continuar pidiendo numeros hasta que lo adivine

# Si el numero que puso es menor que el adivinado entonces indicarle que el numero es mayor

# 4 > Numero incorrecto, el numero es mayor, sigue adivinando
# 8 > Numero incorrecto, el numero es menor, sigue adivinando
# 5 > Felicitaciones, adivinaste el numero!

# Para  terminar un bucle while la condicion ya no tiene que ser True o usar el break

while True:
    numero_a_adivinar = input('Ingresa un numero: ')
    # Lo convierto a entero para poder compararlo
    numero_a_adivinar = int(numero_a_adivinar)

    if numero == numero_a_adivinar:
        print('Felicidades adivinaste!')
        break

    if numero > numero_a_adivinar:
        print('Numero incorrecto, el numero es mayor, sigue adivinando')
    else:
        print('Numero incorrecto, el numero es menor, sigue adivinando')
