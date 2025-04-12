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

            nuevaNota = Nota(usuarioId=identificador, **dataSerializada)
            bd.session.add(nuevaNota)
            bd.session.commit()
            resultado = NotaSerializer().dump(nuevaNota)

            return {
                'message': 'Nota creada exitosamente',
                'content': resultado
            }, 201
        except ValidationError as error:
            return {
                'message': 'Error al crear la nota',
                'content': error.args
            }, 400

    @jwt_required()
    def get(self):
        identificador = get_jwt_identity()
        notas = bd.session.query(Nota).filter(
            Nota.usuarioId == identificador).all()

        resultado = NotaSerializer().dump(notas, many=True)
        return {
            'content': resultado
        }


class NotaController(Resource):

    @jwt_required()
    def delete(self, id):
        # Eliminar la nota siempre y cuando le pertenezca al usuario que esta haciendo la accion. si no le pertenece no podemos eliminar la nota y devolveremos un mensaje 'La nota que intentas eliminar no existe', caso contrario si se puede eliminar
        usuarioId = get_jwt_identity()
        notaEncontrada = bd.session.query(Nota).filter(
            Nota.id == id, Nota.usuarioId == usuarioId).first()

        if not notaEncontrada:
            return {
                'message': 'La nota que intentas eliminar no existe'
            }, 404

        bd.session.query(Nota).filter(Nota.id == notaEncontrada.id).delete()
        bd.session.commit()

        return {
            'message': 'Nota eliminada exitosamente'
        }


api.add_resource(Notas, '/notas')
api.add_resource(NotaController, '/nota/<int:id>')
