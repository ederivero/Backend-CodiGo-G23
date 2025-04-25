from flask import Flask
from pytest import fixture
from app import app as flaskApp


# Si queremos agregar una funcionabilidad que sera utiliza como parametro en nuestras pruebas usaremos este decorador para registrarlo en nuestro pytest
@fixture
def app():
    # Esta app sera la simulacion de mi API para los test
    # Esta variable en flask sirve para indicar que no tiene que usar los mismos recursos que si estuviese en produccion y solamente para escenarios de prueba, aca no validara los cors ni vulnerabilidades de la API
    flaskApp.config['TESTING'] = True
    # Para cuando queramos usar controladores que utilicen la base de datos, esta informacion no se debe guardar de manera permanente y no debemos ensuciar nuestra bd, por ello usamos una bd en MEMORIA como sqlite
    flaskApp.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
    yield flaskApp


@fixture
def client(app: app):
    return app.test_client()


# Este cliente lo pasaremos mediante la configuracion de nuestro pytest
def test_inicio(client: Flask):
    res = client.get('/')
    data = res.get_json()

    assert res.status_code == 200
    assert data['message'] == 'Bienvenid a mi API'
