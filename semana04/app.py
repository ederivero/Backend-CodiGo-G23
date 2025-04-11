from flask import Flask
from os import environ
from dotenv import load_dotenv
from instancias import bd
from flask_migrate import Migrate
from usuarios import usuarios_blueprint

# Leera las variables declaradas en el archivo .env y las pondra como variables de entorno
load_dotenv()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DATABASE_URL')

# Aca registramos todos los modulos del proyecto
app.register_blueprint(usuarios_blueprint)#, url_prefix='/api')

# inicializo mi conexion a la base de datos
bd.init_app(app)

# inicializo mi sistema de migraciones en flask
Migrate(app,bd)

@app.route('/')
def inicio():
    return {
        'message':'La aplicacion esta funcionado exitosamente'
    }

if __name__ == '__main__':
    app.run(debug=True)