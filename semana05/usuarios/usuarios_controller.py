from flask_restful import Resource, Api
from flask import Blueprint, request
from instancias import conexionBD
from modelos import Usuario
from bcrypt import gensalt, hashpw, checkpw
from flask_jwt_extended import create_access_token
from utilitarios import enviar_correo
from marshmallow.exceptions import ValidationError
from .usuarios_serializer import RegistrarUsuarioSerializer, LoginSerializer

usuarios_blueprint = Blueprint('usuarios_blueprint', __name__)
api = Api(usuarios_blueprint)


class Registro(Resource):
    def post(self):
        data = request.get_json()
        try:
            dataValidada = RegistrarUsuarioSerializer().load(data)
            salt = gensalt()
            password = bytes(dataValidada.get('password'), 'utf-8')

            hashedPassword = hashpw(password, salt).decode('utf-8')
            dataValidada['password'] = hashedPassword
            nuevoUsuario = Usuario(**dataValidada)

            conexionBD.session.add(nuevoUsuario)
            conexionBD.session.commit()

            # enviaremos un mensaje de bienvenida
            cuerpoCorreo = '''
Bienvenido a Canchitapp,
Gracias por registrarte en nuestra plataforma, ahora podras realizar las reservas en nuestras nuevas y mejoradas canchas #1 en el Perú.

Atentamente,

El equipo de Canchitapp
                '''
            enviar_correo([nuevoUsuario.correo],
                          'Bienvenido a Canchitapp', cuerpoCorreo)

            return {
                'message': 'Usuario registrado exitosamente'
            }, 201

        except ValidationError as error:
            return {
                'message': 'Error al registrar el usuario',
                'content': error.args
            }, 400


class Login(Resource):
    def post(self):
        try:
            dataValidada = LoginSerializer().load(request.get_json())
            usuarioEncontrado = conexionBD.session.query(Usuario).filter(
                Usuario.correo == dataValidada.get('correo')).first()

            if not usuarioEncontrado:
                return {
                    'message': 'El usuario no existe'
                }, 404

            password = bytes(dataValidada.get('password'), 'utf-8')
            hashedPassword = bytes(usuarioEncontrado.password, 'utf-8')

            esLaPassword = checkpw(password, hashedPassword)

            if esLaPassword:
                return {
                    'message': 'Bienvenido',
                    'token': create_access_token(identity=usuarioEncontrado.id)
                }

            else:
                return {
                    'message': 'Credenciales incorrectas'
                }, 403
        except ValidationError as error:
            return {
                'message': 'Error al hacer el login',
                'content': error.args
            }, 400


api.add_resource(Registro, '/registro')
api.add_resource(Login, '/login')
