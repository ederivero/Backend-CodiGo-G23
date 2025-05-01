from django.urls import path
from .views import vistaPrueba, mostrarRecetario, editarRecetario

# si no se llama la variable asi, tendremos un error
urlpatterns = [
    path('prueba/', vistaPrueba),
    path('recetario/', mostrarRecetario),
    path('recetario/<int:id>', editarRecetario, name='editarRecetario')
]
