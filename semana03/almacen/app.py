from flask import Flask
from productos import productos_blueprint
from instancias import db
from os import environ
from flask_migrate import Migrate
# para poder usar el archivo .env en nuestro proyecto tenemos que importa la libreria python-dotenv
from dotenv import load_dotenv
# lee el archivo .env y configura las variables de entorno agregando nuestras variables declaradas en el archivo .env
load_dotenv()

app = Flask(__name__)
# ahora registramos el Blueprint en nuestra aplicacion para que pueda ser agregado
app.register_blueprint(productos_blueprint, url_prefix='/api')
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DATABASE_URL') 

# Creamos nuestra conexion a la base de datos
# Si queremos usar nuestra instancia en otro archivo que no este la aplicacion de flask, podemos crear la instancia y solamente llamando al metodo init_app ya la podremos inicializar para que pueda funcionar correctamente
db.init_app(app)

# Vamos a controlar las migraciones del proyecto en la bd
Migrate(app,db)

@app.route('/')
def inicio():
    return {
        'message':'Bienvenido a mi API'
    }

if __name__ =='__main__':
    app.run(debug=True)