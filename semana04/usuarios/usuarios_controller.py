from flask_restful import Resource, Api
from flask import Blueprint
from instancias import bd
from modelos import Usuario
from flask import request
from .usuarios_serializer import UsuarioSerializer, LoginSerializer
from marshmallow.exceptions import ValidationError
from bcrypt import gensalt, hashpw, checkpw
from sqlalchemy.exc import IntegrityError
from flask_jwt_extended import create_access_token

# Es para mantener nuestro proyecto de flask en forma de modulos, es decir todo lo relacionado con los usuarios estaran en este modulo y trabajara de manera aislada con los demas modulo
usuarios_blueprint = Blueprint('usuarios_bp', __name__)
api = Api(usuarios_blueprint)


class Registro(Resource):
    def post(self):
        data = request.get_json()
        try:
            dataSerializada = UsuarioSerializer().load(data)
            # Aca intervenimos para generar el hash de la password
            # salt es un texto aleatorio que luego se combinara con la contraseña para generar el hash
            salt = gensalt()
            # para el metodo hashpw tenemos que convertir la password a bytes y mediante su encodificacion definimos que los caracteres estaran en utf-8
            password = bytes(dataSerializada.get('password'), 'utf-8')
            hashedPassword = hashpw(password, salt)
            print(hashedPassword)
            # convertimos el hashed password de bytes a string para poderlo guardar en la bd
            nuevaPassword = hashedPassword.decode('utf-8')
            dataSerializada['password'] = nuevaPassword

            nuevoUsuario = Usuario(**dataSerializada)
            bd.session.add(nuevoUsuario)

            bd.session.commit()
            resultado = UsuarioSerializer().dump(nuevoUsuario)

            return {
                'message': 'Usuario creado exitosamente',
                'content': resultado
            }, 201  # Created
        # Si al momento de hacer la validacion falla entonces para identificar que el error es por la validacion en el except agregamos esa condicion
        except ValidationError as error:
            return {
                'message': 'Error al crear el usuario',
                'content': error.args  # los args es la propiedad donde se guarda el mensaje del error
            }, 400  # Bad Request
        except IntegrityError as error:
            return {
                'message': 'Error al crear el usuario',
                'content': 'Usuario con el correo ya existe'
            }, 400


class Login(Resource):
    def post(self):
        data = request.get_json()
        try:
            dataValidada = LoginSerializer().load(data)

            # SELECT password FROM usuarios WHERE correo = .... LIMIT 1;
            # si deseamos especificar que columnas vamos a leer usamos el metodo with_entities()
            usuarioEncontrado = bd.session.query(Usuario).with_entities(Usuario.password, Usuario.id).filter(
                Usuario.correo == dataValidada.get('correo')).first()

            if not usuarioEncontrado:
                return {
                    'message': 'Usuario no existe'
                }, 404

            passwordEncontrada = bytes(usuarioEncontrado[0], 'utf-8')
            passwordEntrante = bytes(dataValidada.get('password'), 'utf-8')

            validacionPassword = checkpw(passwordEntrante, passwordEncontrada)

            if validacionPassword == True:
                usuarioId = str(usuarioEncontrado[1])
                # identity > servira para indicar a que usuario le pertenece esta JWT
                # si queremos agregar mas informacion aparte del identificador, podemos usar el parametro additional_claims y pasarle un diccionario, tener cuidado de declara llaves importantes (que ya estan siendo utilizadas)
                token = create_access_token(identity=usuarioId, additional_claims={
                                            'tipoUsuario': 'SUPERUSUARIO'})

                return {
                    'message': 'Bienvenido',
                    'content': token
                }
            else:
                return {
                    'message': 'Credenciales incorrectas'
                }, 403  # Forbidden

        except ValidationError as error:
            return {
                'message': 'Error al hacer el login',
                'content': error.args
            }


api.add_resource(Registro, '/registro')
api.add_resource(Login, '/login')
