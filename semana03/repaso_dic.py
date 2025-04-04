def registrar_usuario(nombre, apellido, sexo, fecha_nacimiento):
    # simulacion en la guardar en la bd
    print(nombre)
    return True


registrar_usuario(nombre='Eduardo', apellido='xyz', sexo='M', fecha_nacimiento='2020-02-01')

data = {
    'nombre':'Juanito',
    'apellido': 'Los Palitos',
    'sexo': 'M',
    'fecha_nacimiento': '1998-02-01'
}

registrar_usuario(nombre=data.get('nombre'), apellido=data.get('apellido'), sexo =data.get('sexo'), fecha_nacimiento=data.get('fecha_nacimiento'))

data2 = {
    'nombre':'Roxana',
    'apellido': 'Los Palitos',
    'sexo': 'F',
    'fecha_nacimiento': '1998-02-01'
}
registrar_usuario(**data2)

data3 = {
    'nombre':'Roxana',
    'apellido': 'Los Palitos',
    'sexo': 'F',
    'fecha_nacimiento': '1998-02-01',
    # 'apodo': 'Chismosa'
}
registrar_usuario(**data3)