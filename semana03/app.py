from flask import Flask, request, render_template
from flask_sqlalchemy import SQLAlchemy
# Esta clase nos va a ayudar a poder gestionar las migraciones de nuestro proyecto con la bd
from flask_migrate import Migrate
from sqlalchemy import Column, types, ForeignKey
from sqlalchemy.orm import relationship

from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow.exceptions import ValidationError

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

    # la relationship sirve para indicarle a sqlalchemy como se puede conectar este modelo de usuarios con otro modelo
    # backref hara que se cree un atributo en la otra clase (Direccion) para poder acceder a la relacion de una manera rapida
    direcciones = relationship('Direccion', backref='usuario')

    # para modificar el nombre de la table en la base de datos 
    __tablename__ ='usuarios'

class Direccion(db.Model):
    id = Column(type_=types.Integer, primary_key=True, autoincrement=True)
    calle = Column(type_=types.Text, nullable=False)
    numero = Column(type_=types.Text)
    referencia = Column(type_=types.Text)
    predeterminada = Column(type_=types.Boolean, default=False)
    # RELACIONES
    usuarioId = Column(ForeignKey(column='usuarios.id'), nullable=False, name='usuario_id')

    __tablename__='direcciones'


from marshmallow_sqlalchemy import auto_field
from marshmallow import fields


class DireccionSerializador(SQLAlchemyAutoSchema):
    class Meta:
        model = Direccion
        # marshmallow al comienzo no hace seguimiento a las relaciones, sino que si nosotros lo deseamos tenemos que agregar esta propiedad
        include_fk = True

class UsuarioSerializador(SQLAlchemyAutoSchema):
    # si a mi serializador de la tabla quiero agregar un campo personalizado que no tenga nada que ver con la tabla entonces puedo utilizar un field de marshmallow
    pruebita = fields.String(dump_default='xyz', dump_only=True)

    # sin embargo si quiero agregar un atributo que sea parte de una columna de la base de datos entonces usare el auto_field
    # dump_only > ese field solamente se va a utilizar para cuando nostros querramos convertir la info, es decir, usar el metodo dump mas no cuando vayamos a hacer uso del load
    # load_only > hacer todo lo contrario de dump_only
    direcciones = fields.List(fields.Nested(DireccionSerializador), dump_only=True)
    class Meta:
        # model es el atributo en el cual usara SQLAlchemy para poder mapear las columnas y sus propiedas como tipo de dato, si puede ser nulo, es unico, etc
        model = Usuario
        # este atributo nos permite agregar las relationships en nuestro serializador pero solamente mostrara los id's que estan relacionados con este registro 
        # include_relationships = True


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

    # usuarios = [] # [{id: 1, nombre: 'Eduardo', correo: 'asda@g.com', fechaNacimiento:'...'}]
    # for usuario in resultado:
    #     usuarios.append({
    #         "id": usuario.id,
    #         "nombre": usuario.nombre,
    #         "correo": usuario.correo,
    #         # https://www.programiz.com/python-programming/datetime/strftime
    #         "fechaNacimiento": usuario.fechaNacimiento.strftime('%Y-%m-%d'),
    #         "habilitado": usuario.habilitado
    #     })

    # cuando quiero serializar o convertir una lista de instancias tengo que pasarle el parametro 'many'
    usuarios = UsuarioSerializador().dump(resultado, many=True)
    return {
        'message': 'Usuarios encontrados existosamente',
        'content': usuarios
    }

@app.route('/usuario/<int:id>', methods=['GET','PUT', 'DELETE'])
def gestionarUsuario(id):
    metodo = request.method

    if metodo == 'GET':
        # filter_by hace solamente busqueda por valores exactos, no podemos hacer 'in', <, >, etc
        # db.session.query(Usuario).filter_by(id = id)

        # SELECT * FROM usuarios WHERE id =... LIMIT 1;
        usuario_encontrado = db.session.query(Usuario).filter(Usuario.id == id).first()

        if usuario_encontrado is None:
            return {
                'message':'Usuario no existe'
            }, 404

        else:

            print(usuario_encontrado.direcciones)
            # dump > convierte la instancias de la base de datos a un diccionario con data que pueda ser devuelta al frontend
            resultado = UsuarioSerializador().dump(usuario_encontrado)

            return{
                'content': resultado
            }

    elif metodo == 'PUT':
        usuario_encontrado = db.session.query(Usuario).filter(Usuario.id == id).first()

        if usuario_encontrado is None:
            return {
                'message':'Usuario no existe'
            }, 404
        
        data = request.get_json()
        # Asi como el serializador me sirve para convertir las instancias a dict, tbn puedo usarlo para validar si la informacion es correcta o no
        # Si la data al validarse es incorrecta, emitira un error
        try:
            data_validada = UsuarioSerializador().load(data)

            print(data_validada)
            # una forma de hacer un update es con el usuario ya encontrado
            usuario_encontrado.nombre = data_validada.get('nombre', usuario_encontrado.nombre)
            usuario_encontrado.correo = data_validada.get('correo', usuario_encontrado.correo)
            usuario_encontrado.fechaNacimiento = data_validada.get('fechaNacimiento', usuario_encontrado.fechaNacimiento)

            # para que los cambios persistan en el tiempo
            db.session.commit()

            # el otro metodo para hacer una actualizacion
            #synchronize_session > sirve para indicar como queremos que realice la actualizacion, que se realice de manera automatica, que haga una evaluacion antes de la actualizacion para evitar errores o que retorne los errores
            # la ventaja de hacerlo de esta manera es que no tenemos que hacer un commit, ya que lo hace dentro de la misma actualizacion
            # https://docs.sqlalchemy.org/en/20/orm/queryguide/dml.html#orm-queryguide-update-delete-sync
            # db.session.query(Usuario).filter(Usuario.id == id).update({
            #     Usuario.nombre: 'bernardo', 
            #     Usuario.correo: 'correo1@correo.com'
            #     }, synchronize_session='evaluate')
            
            # ahora convierto mi usuario actualizado a un diccionario
            resultado = UsuarioSerializador().dump(usuario_encontrado)
            return {
                'message':'Usuario actualizado exitosamente',
                'content': resultado
            }
        except ValidationError as error:
            return {
                'message':'Error al actualizar el usuario',
                'content': error.args
            },400

    elif metodo == 'DELETE':
        elementos_eliminados = db.session.query(Usuario).filter(Usuario.id == id).delete()
        
        # Para la eliminacion tenemos que agregar el commit para que lo cambios queden de manera permanente en la bd
        db.session.commit()

        if elementos_eliminados == 0:
            return {
                'message':'El usuario no existe'
            }, 404
        else:
            return {
                'message': 'Usuario eliminado exitosamente'
            }

@app.route('/usuario-frontend', methods = ['GET'])
def devolverUsuarioFrontend():
    usuarios = db.session.query(Usuario).all()
    return render_template('listar_usuarios.html', usuarios=usuarios)



@app.route('/direccion', methods = ['POST'])
def crearDireccion():
    # usando el serializador validar que la informacion entrante sea valida para luego poder guardarla en la base de datos en la tabla direcciones, si no se puede, retornar un mensaje de error y el detalle
    data = request.get_json()
    try:
        data_validada = DireccionSerializador().load(data)
        # Si tengo una funcion y esta funcion recibe los mismos parametros que tengo en mi diccionario, entonces lo puedo pasar usando el **
        nueva_direccion = Direccion(**data_validada)
        db.session.add(nueva_direccion)

        db.session.commit()

        # Ahora que ya  tenemos guardada la direccion vamos a obtener su informacion para retornarla al cliente
        resultado = DireccionSerializador().dump(nueva_direccion)
        return {
            'message':'Direccion agregada exitosamente',
            'content':resultado
        },201
    except ValidationError as error:
        return {
            'message': 'Error al crear la direccion',
            'content': error.args
        },400

@app.route('/direcciones/<int:usuarioId>', methods = ['GET'])
def devolverDireccionesDeUsuario(usuarioId):
    direcciones = db.session.query(Direccion).filter(Direccion.usuarioId == usuarioId).all()
    
    respuesta = DireccionSerializador().dump(direcciones, many=True)

    return {
        'content': respuesta
    }


# para tener una mayor seguridad de que la instancia esta en el archivo principal
if __name__ == '__main__':
    app.run(debug=True)
