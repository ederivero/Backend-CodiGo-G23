from flask_restful import Resource, Api
from flask import Blueprint
from instancias import bd
from modelos import Usuario
from flask import request
from .usuarios_serializer import UsuarioSerializer
from marshmallow.exceptions import ValidationError

# Es para mantener nuestro proyecto de flask en forma de modulos, es decir todo lo relacionado con los usuarios estaran en este modulo y trabajara de manera aislada con los demas modulo
usuarios_blueprint = Blueprint('usuarios_bp', __name__)
api = Api(usuarios_blueprint)

class Registro(Resource):
    def post(self):
        data = request.get_json()
        try:
            dataSerializada = UsuarioSerializer().load(data)
            nuevoUsuario = Usuario(**dataSerializada)
            print(nuevoUsuario)

            return {
                'message': 'Usuario creado exitosamente'
            },201 # Created
        # Si al momento de hacer la validacion falla entonces para identificar que el error es por la validacion en el except agregamos esa condicion
        except ValidationError as error:
            return {
                'message':'Error al crear el usuario',
                'content':error.args # los args es la propiedad donde se guarda el mensaje del error
            },400 # Bad Request

api.add_resource(Registro, '/registro')