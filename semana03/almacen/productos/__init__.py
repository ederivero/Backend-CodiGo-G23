# en python cuando queremos trabajar con carpetas en nuestro proyecto para que python pueda reconocer estas carpetas se declara el archivo __init__.py y asi python lo incluira en el proyecto, sino lo omitira y al utilizar el contenido dentro de estas carpetas lanzara un error de que no encontro el modulo

# al importar una funcion, clase, metodo, etc esto se hace accesible a todo el proyecto, es decir, al import en el __init__.py tambien lo estamos exportando
from .productos_controller import productos_blueprint