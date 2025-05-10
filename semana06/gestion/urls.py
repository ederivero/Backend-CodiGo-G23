from django.urls import path
from .views import (vistaPrueba, 
                    mostrarRecetario, 
                    editarRecetario, 
                    PlatosController, 
                    verificarStatusServidor, 
                    CrearIngredienteController,
                    DevolverListarEliminarIngredienteController,
                    registrarUsuario,
                    loginManual,
                    PlatoViewset)

from rest_framework_simplejwt.views import TokenObtainPairView

# si no se llama la variable asi, tendremos un error
urlpatterns = [
    path('prueba/', vistaPrueba),
    path('recetario/', mostrarRecetario),
    path('recetario/<int:id>', editarRecetario, name='editarRecetario'),
    # as_view > convierte la clase en una vista para que Django la pueda entender y utilizar
    path('platos/',PlatosController.as_view()),
    path('status/', verificarStatusServidor),
    path('ingrediente/', CrearIngredienteController.as_view()),
    path('ingrediente/<pk>', DevolverListarEliminarIngredienteController.as_view()),
    path('registro/', registrarUsuario),
    path('login/', TokenObtainPairView.as_view()),
    path('login-personalizado/', loginManual),
    # Para que los viewset puedan trabajar bien y en algunos casos usemos el parametro PK entonces tenemos que indicar dos rutas
    # Para indicar que metodos HTTP con que metodos de la clase tienen que hacer match tenemos que indicarlo en un diccionario dentro del metodo as_view
    path('plato/', PlatoViewset.as_view({'get':'list'})),
    path('plato/<pk>', PlatoViewset.as_view({'get':'retrieve'})),
]
