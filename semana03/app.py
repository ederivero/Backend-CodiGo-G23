from flask import Flask, request, render_template
from flask_sqlalchemy import SQLAlchemy
# Esta clase nos va a ayudar a poder gestionar las migraciones de nuestro proyecto con la bd
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:root@localhost:5432/prueba_flask'
# al usar flask-sqlalchemy necesita de la instancia de flask la conexion a la base de datos
db = SQLAlchemy(app=app)

# ya con la instanciacion de la clase ya podemos comenzar a utilizar nuestras migraciones
Migrate(app, db)

@app.route('/')
def inicio():
    hobbies = ['Ir a pescar', 'Montar bici', 'Programar', 'Caminar']

    return render_template('prueba.html',
                           nombre_desarrollador='Eduardo',
                           hobbies=hobbies)


# para tener una mayor seguridad de que la instancia esta en el archivo principal
if __name__ == '__main__':
    app.run(debug=True)
