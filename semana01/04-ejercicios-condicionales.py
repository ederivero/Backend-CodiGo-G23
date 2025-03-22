# Tengo una tienda de ropa
# tengo ropa para las siguientes caracteristicas
# Masculino y su talla es XL o L > Si hay ropa
# Femenino y su talla es L o M > Si hay ropa

# caso contrario en todos los demas escenarios no tengo ropa
# Masculo M   > No hay ropa
# Femenino XL > No hay ropa

sexo = 'Femenino'
talla = 'XL'

if sexo == 'Masculino':
    if talla == 'XL' or talla == 'L':
        print('Si hay ropa')

    else:
        print('No hay ropa')
else:
    # elif sexo == 'Femenino':
    if talla == 'L' or talla == 'M':
        print('Si hay ropa')
    else:
        print('No hay ropa')

if sexo == 'Masculino' and talla in ('XL', 'L'):
    print('Si hay ropa')
elif sexo == 'Femenino' and talla in ('L', 'M'):
    print('Si hay ropa')
else:
    print('No hay ropa')

if (sexo == 'Masculino' and talla in ('XL', 'L')) or (sexo == 'Femenino' and talla in ('L', 'M')):
    print('Si hay ropa')
else:
    print('No hay ropa')
