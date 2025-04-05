from flask import Flask

app = Flask(__name__)

@app.route('/')
def inicio():
    return {
        'message':'Bienvenido a mi API'
    }

if __name__ =='__main__':
    app.run(debug=True)