# Lista (Arreglo)
# Modificable y ordenada
numeros_de_emergencia = ['104', '9574847782', '937837473', '054226845']

print(numeros_de_emergencia)
print(numeros_de_emergencia[0])
print(len(numeros_de_emergencia))

longitud_numeros = len(numeros_de_emergencia)
print(numeros_de_emergencia[longitud_numeros-1])

# si queremos recorrer la lista de derecha a izquierda podemos usar valores negativos
print(numeros_de_emergencia[-1])

# si yo quiero hacer una sub lista de la lista
# pos_inicio:           > desde la pos inicial hasta el final
# pos_inicio:pos_final  > desde la pos inicial hasta la menor que la pos final
# :pos_final            > desde el inicio hasta la pos final
print(numeros_de_emergencia[2:])
print(numeros_de_emergencia[1:3])
print(numeros_de_emergencia[:2])

numeros_de_emergencia.append('9595959595')
numeros_de_emergencia.append('123123123')

print(numeros_de_emergencia)

# Remueve el elemento de la lista y los siguientes elementos recorren ocupan su lugar
numero_eliminado = numeros_de_emergencia.pop(3)
print(numero_eliminado)
print(numeros_de_emergencia)

# del > delete
del numeros_de_emergencia[3]
print(numeros_de_emergencia)

# si queremos empezar de 0 con la lista
numeros_de_emergencia.clear()

# Las listas pueden tener diferentes tipos de datos dentro de ella
miscelaneo = ['Roberto', '2015-02-05', False, 10, 14.5, -10]

ejercicio_1 = [1, 'Luis', 'Marcona', False, 80, 20.5, [4, 5, 6]]
# Como hago para obtener a 'Marcona'
resultado_1 = ejercicio_1[2]

# Como hago para obtener 'Luis' hasta 80
resultado_2 = ejercicio_1[1:5]

# Como hago para obtener la penultima posicion
resultado_3 = ejercicio_1[-2]

# Como hago para obtener el numero 5
resultado_4 = ejercicio_1[6][1]

extraer = ejercicio_1[6]
print(extraer)
print(extraer[1])

print(resultado_1)
print(resultado_2)
print(resultado_3)
print(resultado_4)

miscelaneo[0] = '99999999'

# Tupla
# Son ordenadas PERO no son editables
meses = ('Enero', 'Febrero', 'Marzo')

# Definir informacion quen o va a cambiar en todo el tiempo de la aplicacion

print(meses[2])
print(meses[-1])

# Si en la tupla tenemos una lista, esa lista si se puede modificar
# meses[0] = 'Diciembre'

data = ('Juan', 'Roberto', [1, 2, 3, ['Eduardo', 'Arnold']])

# Como hago para obtener Eduardo
resultado = data[2][3][0]
print(resultado)

# Diccionarios
# Semi ordenado porque su orden depende las llaves (keys) y a su vez es editable
persona = {
    'nombre': 'Eduardo',
    'apellido': 'Bareto',
    'edad': 31,
    'hobbies': ['Natacion', 'Trekking', 'Programacion'],
    'idiomas': ('Español', 'Ingles'),
    'habilidades': [
        {
            'nombre': 'Honestidad',
            'importancia': 'Alta'
        },
        {
            'nombre': 'Generocidad',
            'importancia': 'Media'
        },
        {
            'nombre': 'Empatia',
            'importancia': 'Media Alta'
        }
    ]
}

print(persona)

# Editar llaves existentes
persona['nombre'] = 'Shrek'
print(persona)
# La llave que quiero editar no existe, se creara
persona['nacionalidad'] = 'Peruano'
print(persona)

del persona['apellido']
elemento_eliminado = persona.pop('edad')
print(persona)
print(elemento_eliminado)

# Para limpiar todo el diccionario
# persona.clear()
print(persona)

# Si una llave contiene una tupla que no es editable no se puede ni agregar ni eliminar elementos de
# persona['idiomas'].append('Frances')

persona['hobbies'].append('Trabajar')

# Conjunto (Set)
# Desordenada y es editable
planetas = {'Tierra', 'Marte', 'Jupiter', 'Saturno'}

planetas.add('Urano')

print(planetas)

# in > sirve para poder ubicar un elemento dentro de una coleccion de dato, una lista, tupla o conjunto
print('Tierra' in planetas)
print('Pluton' in planetas)
