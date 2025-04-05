from flask_restful import Resource

# con flask_restful al crear una clase y heredar la clase Resource podemos utilizar los metodos http como si fuesen metodos de la clase
class Productos(Resource):
    def get(self):
        return {
            'message': 'Los productos son'
        }, 200