from flask import Flask, request, render_template

app = Flask(__name__)


@app.route('/')
def inicio():
    hobbies = ['Ir a pescar', 'Montar bici', 'Programar', 'Caminar']

    return render_template('prueba.html',
                           nombre_desarrollador='Eduardo',
                           hobbies=hobbies)


# para tener una mayor seguridad de que la instancia esta en el archivo principal
if __name__ == '__main__':
    app.run(debug=True)
