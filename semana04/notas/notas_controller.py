from flask_restful import Resource, Api
from flask import request, Blueprint
from modelos import Nota
from instancias import bd
from marshmallow.exceptions import ValidationError
from .notas_serializer import NotaSerializer
from flask_jwt_extended import jwt_required, get_jwt_identity

nota_blueprint = Blueprint('nota_bp', __name__)
api = Api(nota_blueprint)


class Notas(Resource):
    # indicar que este metodo tiene que si o si pasar una JWT y esta debe de ser valida
    @jwt_required()
    def post(self):
        data = request.get_json()
        try:
            dataSerializada = NotaSerializer().load(data)
            # para obtener la informacion de mi token
            # el identificador es el elemento que le colocamos a la token cuando la creamos (identity)
            identificador = get_jwt_identity()
            print(identificador)
            return {
                'message': 'Nota creada exitosamente'
            }, 201
        except ValidationError as error:
            return {
                'message': 'Error al crear la nota',
                'content': error.args
            }, 400


api.add_resource(Notas, '/notas')
