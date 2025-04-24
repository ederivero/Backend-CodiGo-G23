from flask import Flask
from instancias import conexionBD
from os import environ
from usuarios.usuarios_controller import usuarios_blueprint
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)
app.register_blueprint(usuarios_blueprint)

# Sirve para conectarnos con la bd
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DATABASE_URL')

# Sirve para firmar las JWT
app.config['JWT_SECRET_KEY'] = environ.get('SECRET_KEY')

conexionBD.init_app(app)
Migrate(app, conexionBD)
JWTManager(app)


@app.route('/')
def inicio():
    return {
        'message': 'Bienvenido a mi API'
    }


if __name__ == '__main__':
    app.run(debug=True)
