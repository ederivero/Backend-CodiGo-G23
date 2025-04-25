from flask import Flask
from faker import Faker

faker = Faker()


def test_crear_usuario_correo_incorrecto(client: Flask):
    """
    Verifica que al pasar un correo invalido no permita la insercion
    """

    body = {
        'nombre': faker.name(),
        'correo': 'correo.com',
        'password': faker.password(
            length=9,
            special_chars=True,
            digits=True,
            upper_case=True,
            lower_case=True),
        'tipoUsuario': 'ADMIN'
    }

    res = client.post('/registro', json=body)
    data = res.get_json()

    assert res.status_code == 400
    assert data['message'] == 'Error al registrar el usuario'
    # cuando tenemos un error de los serializadores estos retorna una lista y en la primera posicion tendremos el error del correo
    # {'content': [{'correo': ['Not a valid email address.']}] }
    assert data['content'][0]['correo'][0] == 'Correo invalido.'


# Hacer un test en el cual se valide cuando la contraseña no cumple los estandares
def test_crear_usuario_password_incorrecto(client: Flask):
    """
    Verifica que al pasar una password invalida no permita la insercion
    """

    body = {
        'nombre': faker.name(),
        'correo': faker.email(),
        'password': faker.password(
            length=5,
            special_chars=True,
            digits=True,
            upper_case=True,
            lower_case=True),
        'tipoUsuario': 'ADMIN'
    }

    res = client.post('/registro', json=body)
    data = res.get_json()

    assert res.status_code == 400
    assert data['message'] == 'Error al registrar el usuario'
    assert data['content'][0]['password'][0] == 'El password debe tener al menos una mayus, una minus, un numero y un caracter especial y no menor a 8 caracteres'


# Hacer un test en el cual se valide cuando la informacion es correcta
def test_crear_usuario(client: Flask):
    """
    Verifica que al pasar una password invalida no permita la insercion
    """

    body = {
        'nombre': faker.name(),
        'correo': faker.email(),
        'password': faker.password(
            length=10,
            special_chars=True,
            digits=True,
            upper_case=True,
            lower_case=True),
        'tipoUsuario': 'ADMIN'
    }

    res = client.post('/registro', json=body)
    data = res.get_json()

    assert res.status_code == 201
    assert data['message'] == 'Usuario registrado exitosamente'
