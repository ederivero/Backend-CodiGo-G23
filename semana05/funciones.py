def calcular_igv(monto):
    if monto == 0:
        raise ValueError('No se puede sacar el igv de 0')

    igv = monto * 0.18
    return igv
