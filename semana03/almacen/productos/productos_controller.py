from flask_restful import Resource, Api
from flask import Blueprint
from models import Producto
from instancias import db
from flask import request
from .productos_serializer import ProductoSerializer
from marshmallow.exceptions import ValidationError

# Al usar blueprint en una aplicacion hacemos que esta sea mas modular, es decir, se puede dividir una aplicacion en varios modulos y esto hace que su mantenimiento sea menos costoso y mas entendible al estar cada uno de las operaciones separadas
productos_blueprint = Blueprint('productos_bp', __name__)
api = Api(productos_blueprint)

# con flask_restful al crear una clase y heredar la clase Resource podemos utilizar los metodos http como si fuesen metodos de la clase
class Productos(Resource):
    def get(self):
        # Asi se podria restringir el uso de query params
        # if request.args:
        #     # aca te estan pasando query params
        #     return {
        #         'message': 'Uso invalido de query params'
        #     }, 400
        
        criterio_busqueda = []
        if 'nombre' in request.args:
            nombre = request.args.get('nombre')
            criterio_busqueda.append(Producto.nombre.ilike(f'%{nombre}%'))

        if 'precio' in request.args:
            precio = request.args.get('precio')
            criterio_busqueda.append(Producto.precio == precio)

        # Para usar un rango de precios podria hacerse de la siguiente forma
        if 'precioDesde' in request.args:
            precioDesde = request.args.get('precioDesde')
            criterio_busqueda.append(Producto.precio >= precioDesde)

        if 'precioHasta' in request.args:
            precioHasta = request.args.get('precioHasta')
            criterio_busqueda.append(Producto.precio <= precioHasta)

            
        # al usar un arreglo en un parametro pero con el * estamos indicando que solamente queremos el contenido del arreglo mas no el arreglo como tal
        productos_encontrados = db.session.query(Producto).filter(*criterio_busqueda).all()
        print(productos_encontrados)
        resultado = ProductoSerializer().dump(productos_encontrados, many=True)
        return {
            'message': 'Los productos son',
            'content': resultado
        }, 200

    def post(self):
        try:
            dataValidada = ProductoSerializer().load(request.get_data())

            nuevoProducto = Producto(**dataValidada)
            db.session.add(nuevoProducto)
            db.session.commit()

            resultado = ProductoSerializer().dump(nuevoProducto)

            return {
                'message':'Producto creado exitosamente',
                'content': resultado
            },201
        except ValidationError as error:
            return {
                'message': 'Error al crear el producto',
                'content': error.args
            },400
# mediante la clase Api nosotros podemos registrar las urls que van a poder ser accedidas a la clase
api.add_resource(Productos, '/productos')