from flask import Flask
from os import environ
from dotenv import load_dotenv
from instancias import bd
from flask_migrate import Migrate
from usuarios import usuarios_blueprint
from notas import nota_blueprint
from flask_jwt_extended import JWTManager
from datetime import timedelta
from flask_cors import CORS
# Leera las variables declaradas en el archivo .env y las pondra como variables de entorno
load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DATABASE_URL')
# La variable para que pueda firmar o crear JWT
app.config['JWT_SECRET_KEY'] = environ.get('JWT_KEY')
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(minutes=5, seconds=3)

# inicializo mis cors
# CORS es un validador antes que entre al backend la peticion para poder permitir o denegar el acceso
CORS(app, origins=['http://127.0.0.1:5500'],
     allow_headers='*', methods=['GET', 'POST', 'DELETE'])

# inicializamos nuestro sistema de JWT
jwt = JWTManager(app)

# Aca registramos todos los modulos del proyecto
app.register_blueprint(usuarios_blueprint)  # , url_prefix='/api')
app.register_blueprint(nota_blueprint)

# inicializo mi conexion a la base de datos
bd.init_app(app)

# inicializo mi sistema de migraciones en flask
Migrate(app, bd)


# Para modificar el comportamiento de mi Flask jwt extended
# https://flask-jwt-extended.readthedocs.io/en/stable/api.html#flask_jwt_extended.JWTManager.expired_token_loader
@jwt.expired_token_loader
def token_expirada(header, payload):

    return {
        'messsage': 'La token ah expirado, vuelve a iniciar sesion'
    }, 401


# https://flask-jwt-extended.readthedocs.io/en/stable/api.html#flask_jwt_extended.JWTManager.unauthorized_loader
@jwt.unauthorized_loader
def token_faltante(argumento):
    print(argumento)
    return {
        'message': 'Se necesita una token para realizar este request'
    }


@app.route('/')
def inicio():
    return {
        'message': 'La aplicacion esta funcionado exitosamente'
    }


if __name__ == '__main__':
    app.run(debug=True)
