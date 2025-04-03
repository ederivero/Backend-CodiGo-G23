from flask import Flask, request, render_template
from flask_sqlalchemy import SQLAlchemy
# Esta clase nos va a ayudar a poder gestionar las migraciones de nuestro proyecto con la bd
from flask_migrate import Migrate
from sqlalchemy import Column, types

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:root@localhost:5432/prueba_flask'
# al usar flask-sqlalchemy necesita de la instancia de flask la conexion a la base de datos
db = SQLAlchemy(app=app)

# ya con la instanciacion de la clase ya podemos comenzar a utilizar nuestras migraciones
Migrate(app, db)

class Usuario(db.Model):
    # Al heredad la clase Model estaremos indicando que esta clase se comportara como un Modelo a nivel de bd
    # https://docs.sqlalchemy.org/en/20/core/metadata.html#sqlalchemy.schema.Column
    # https://docs.sqlalchemy.org/en/20/core/type_basics.html#module-sqlalchemy.types
    id = Column(type_=types.Integer, primary_key=True, autoincrement=True)
    nombre = Column(type_=types.Text, nullable=False)
    correo = Column(type_=types.Text, nullable=False, unique=True)
    fechaNacimiento = Column(name='fecha_nacimiento', type_=types.DateTime)
    habilitado = Column(type_=types.Boolean, default=True)

    # para modificar el nombre de la table en la base de datos 
    __tablename__ ='usuarios'


@app.route('/')
def inicio():
    hobbies = ['Ir a pescar', 'Montar bici', 'Programar', 'Caminar']

    return render_template('prueba.html',
                           nombre_desarrollador='Eduardo',
                           hobbies=hobbies)

@app.route('/usuario', methods=['POST'])
def crearUsuario():
    data = request.get_json()
    data.get('nombre') # el metodo get en los dict retornara el valor, y si no existe la llave retornara None
    # Creamos la instancia de un nuevo usuario
    nuevo_usuario = Usuario(nombre = data.get('nombre'), 
                            correo = data.get('correo'), 
                            fechaNacimiento = data.get('fechaNacimiento'))
    
    # ahora llamamos a la conexion con la bd para crear una sesion 
    db.session.add(nuevo_usuario)

    # para confirmar los cambios que sean de manera permanente
    db.session.commit()

    return {
        'message': 'Usuario creado exitosamente'
    }, 201 # Created


@app.route('/usuarios', methods=['GET'])
def listarUsuarios():
    # creamos una nueva sesion para poder conectarnos a la base de datos
    # SELECT * FROM usuarios;
    resultado = db.session.query(Usuario).all()

    usuarios = [] # [{id: 1, nombre: 'Eduardo', correo: 'asda@g.com', fechaNacimiento:'...'}]
    for usuario in resultado:
        usuarios.append({
            "id": usuario.id,
            "nombre": usuario.nombre,
            "correo": usuario.correo,
            # https://www.programiz.com/python-programming/datetime/strftime
            "fechaNacimiento": usuario.fechaNacimiento.strftime('%Y-%m-%d'),
            "habilitado": usuario.habilitado
        })

    print(usuarios)
    return {
        'message': 'Usuarios encontrados existosamente',
        'content': usuarios
    }

# para tener una mayor seguridad de que la instancia esta en el archivo principal
if __name__ == '__main__':
    app.run(debug=True)
