alumnos = ['Alexander', 'Diego', 'Fernando',
           'Cesar', 'Carlos', 'Esteban', 'Eduardo']

# crea una variable y en esa variable almacenara el valor de la posicion actual de la coleccion
for nombre_alumno in alumnos:
    print(nombre_alumno)


# podemos iterar texto
curso = 'Backend'

for letra in curso:
    print(letra)


# si quiero dentro del bucle saltarme una iteracion
# continue
texto = 'Buenos dias con todos'
for letra in texto:
    if letra == ' ':
        # evita que continue el proceso normal del bucle, pero no lo termina, solo salta la demas operacion
        continue
    print(letra)


for letra in texto:
    if letra == 'o':
        # a diferencia del continue el break termina todo el bucle de una
        break
    print(letra)

# supongamos que tengo que declara mi for pero no tengo la logica definica, entonces para evitar el error de la identacion podemos usar la palabra pass significa que tengamos unas llaves sin nada adentro {}
for letra in texto:
    pass


# Si queremos usarlo de manera tradicional
# range
for numero in range(4):
    print(numero)

# range(n) > n > tope hasta que numero empezando de 0 llegara
# range(m,n) >  m > valor inicial, desde que numero empezamos
#               n > tope
# range(m,n,p) >p > incrementador o decrementador

print('---------')
for numero in range(1, 10, 2):
    print(numero)


# Usando el siguiente texto
texto = 'Hola, me llAmo eduardo y me gustaría contarles una historia'
# necesito saber cuantas vocales hay en el texto y cuantos espacios tengo, asi mismo si encuentro una letra 'z' debo terminar el bucle
contador_vocales = 0
contador_espacios = 0

codigo_ascii_vocales_tilde = [237, 225, 233,
                              237, 243, 250, 193, 201, 205, 211, 218]
for letra in texto:
    # lower sirve para llevar el texto o palabra o lo que fuera a minusculas
    if letra.lower() in ('a', 'e', 'i', 'o', 'u'):
        contador_vocales = contador_vocales + 1

    if ord(letra) in codigo_ascii_vocales_tilde:
        contador_vocales = contador_vocales + 1

    if letra == ' ':
        contador_espacios = contador_espacios + 1

    if letra == 'z':
        break

print(contador_vocales)
print(contador_espacios)
