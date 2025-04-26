from flask import Flask
from faker import Faker
from modelos import Usuario, TipoUsuario
from instancias import conexionBD
from bcrypt import gensalt, hashpw
from pytest_mock import MockerFixture

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
# mocker es la funcionabilidad que nos permite simular consumo de APIs de terceros
def test_crear_usuario(client: Flask, mocker: MockerFixture):
    """
    Verifica que al pasar una password invalida no permita la insercion
    """
    # Ahora vamos a simular el proceso de enviar_correo
    mockerEnviarCorreo = mocker.patch(
        'usuarios.usuarios_controller.enviar_correo')

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
    # Adicionalmente podemos indicar si esta funcion esta siendo llamada, si esta llamandose con determinados parametros , etc
    mockerEnviarCorreo.assert_called_once()


def test_login_usuario_incorrecto(client: Flask):
    """
    Test para probar cuando el usuario no existe
    """

    body = {
        'correo': faker.email(),
        'password': faker.password()
    }

    res = client.post('/login', json=body)
    data = res.get_json()

    assert res.status_code == 404
    assert data['message'] == 'El usuario no existe'


def test_login_usuario_password_incorrecta(client: Flask):
    """
    Test para probar cuando el usuario pase una password incorrecta
    """
    # Arrange > Es la parte del test donde voy a configurar mis registros, peticiones a API de terceros para el escenario de prueba
    dataUsuarioFalso = {
        'nombre': faker.name(),
        'correo': faker.email(),
        # para la password tenemos que hacer todo el procedimiento de generar su hashing
        'password': hashpw(bytes(faker.password(), 'utf-8'), gensalt()).decode('utf-8'),
        'tipoUsuario': TipoUsuario.ADMIN
    }
    # Primero creo mi usuario en la bd
    usuarioFalso = Usuario(**dataUsuarioFalso)
    conexionBD.session.add(usuarioFalso)
    conexionBD.session.commit()

    # Act > Es la parte central del test donde se indica que es lo que se quiere probar
    body = {
        'correo': dataUsuarioFalso.get('correo'),
        'password': faker.password()  # esta password es diferente de la password del usuario
    }
    res = client.post('/login', json=body)

    data = res.get_json()

    # Assert > Es las validaciones correspondientes resultado de las pruebas
    assert res.status_code == 403
    assert data['message'] == 'Credenciales incorrectas'


# Realizar el test cuando no se le pase el correo en el login
def test_login_sin_correo(client: Flask):
    body = {
        'password': faker.password(),
        'correo': 'correo'
    }

    res = client.post('/login', json=body)

    data = res.get_json()

    assert res.status_code == 400
    assert data['content'][0]['correo'] == ['Correo invalido.']


# Realizar el test cuando las credenciales son correctas
def test_login_exitoso(client: Flask, mocker: MockerFixture):
    # Arrange
    # Si queremos obligar al funcionamiento de un metodo podemos hacerlo mediante el mocker y agregandole un valor de retorno
    mockerGenerarJWT = mocker.patch(
        'usuarios.usuarios_controller.create_access_token')
    mockerGenerarJWT.return_value = 'TU_TOKEN'

    body = {
        'correo': faker.email(),
        'password': faker.password()
    }
    password = hashpw(bytes(body.get('password'), 'utf-8'),
                      gensalt()).decode('utf-8')

    nuevoUsuario = Usuario(correo=body.get('correo'),
                           password=password, nombre=faker.name())
    conexionBD.session.add(nuevoUsuario)
    conexionBD.session.commit()

    # Act
    res = client.post('/login', json=body)
    data = res.get_json()

    # Assert
    assert res.status_code == 200
    assert data['token'] == 'TU_TOKEN'
    mockerGenerarJWT.assert_called_with(identity=nuevoUsuario.id)
