from flask_restful import Resource, Api
from flask import Blueprint, request
from instancias import conexionBD
from modelos import Usuario
from bcrypt import gensalt, hashpw, checkpw
from flask_jwt_extended import create_access_token
from marshmallow.exceptions import ValidationError
from .usuarios_serializer import RegistrarUsuarioSerializer

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
            return {
                'message': 'Usuario registrado exitosamente'
            }, 201

        except ValidationError as error:
            return {
                'message': 'Error al registrar el usuario',
                'content': error.args
            }, 400


api.add_resource(Registro, '/registro')
