from django.urls import path
from .views import vistaPrueba, mostrarRecetario, editarRecetario, PlatosController

# si no se llama la variable asi, tendremos un error
urlpatterns = [
    path('prueba/', vistaPrueba),
    path('recetario/', mostrarRecetario),
    path('recetario/<int:id>', editarRecetario, name='editarRecetario'),
    # as_view > convierte la clase en una vista para que Django la pueda entender y utilizar
    path('platos/',PlatosController.as_view())
]
