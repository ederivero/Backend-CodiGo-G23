from flask_restful import Resource, Api
from flask import Blueprint
from models import Producto
from instancias import db

# Al usar blueprint en una aplicacion hacemos que esta sea mas modular, es decir, se puede dividir una aplicacion en varios modulos y esto hace que su mantenimiento sea menos costoso y mas entendible al estar cada uno de las operaciones separadas
productos_blueprint = Blueprint('productos_bp', __name__)
api = Api(productos_blueprint)

# con flask_restful al crear una clase y heredar la clase Resource podemos utilizar los metodos http como si fuesen metodos de la clase
class Productos(Resource):
    def get(self):
        productos_encontrados = db.session.query(Producto).all()
        print(productos_encontrados)
        return {
            'message': 'Los productos son'
        }, 200

# mediante la clase Api nosotros podemos registrar las urls que van a poder ser accedidas a la clase
api.add_resource(Productos, '/productos')