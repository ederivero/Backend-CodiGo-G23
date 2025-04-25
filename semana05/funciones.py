def calcular_igv(monto):
    if monto == 0:
        raise ValueError('No se puede sacar el igv de 0')
    igv = monto * 0.18
    return igv


def numero_par_o_impar(numero):
    if numero == 0:
        return 'No se puede calcular'
    if numero % 2 == 0:
        return 'Es par'
    else:
        return 'Es impar'
