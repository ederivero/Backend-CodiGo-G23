# Este archivo lo usa pytest para hacer las configuraciones de nuestras pruebas
# https://docs.pytest.org/en/stable/reference/fixtures.html#conftest-py-sharing-fixtures-across-multiple-files
from pytest import fixture
from app import create_app
from instancias import conexionBD


# Si queremos agregar una funcionabilidad que sera utiliza como parametro en nuestras pruebas usaremos este decorador para registrarlo en nuestro pytest
@fixture
def app():
    # Esta app sera la simulacion de mi API para los test
    # Esta variable en flask sirve para indicar que no tiene que usar los mismos recursos que si estuviese en produccion y solamente para escenarios de prueba, aca no validara los cors ni vulnerabilidades de la API
    app = create_app({
        "SQLALCHEMY_DATABASE_URI": "sqlite:///:memory:",
        "TESTING": True,
        "JWT_SECRET_KEY": "nomuysecreto"
    })

    # Para cuando queramos usar controladores que utilicen la base de datos, esta informacion no se debe guardar de manera permanente y no debemos ensuciar nuestra bd, por ello usamos una bd en MEMORIA como sqlite

    with app.app_context():
        # elimina todas las tablas en la base de datos
        conexionBD.drop_all()
        # crea todas las tablas sin el uso de migraciones
        conexionBD.create_all()
        yield app
        # elimina todas las conexiones actualices a la base de datos para mantenerlo limpio
        conexionBD.session.remove()


@fixture
def client(app: app):
    return app.test_client()
