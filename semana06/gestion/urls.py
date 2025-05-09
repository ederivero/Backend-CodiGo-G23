from django.urls import path
from .views import (vistaPrueba, 
                    mostrarRecetario, 
                    editarRecetario, 
                    PlatosController, 
                    verificarStatusServidor, 
                    CrearIngrediente,
                    CrearYListarIngredienteController,
                    DevolverListarEliminarIngredienteController,
                    registrarUsuario,
                    loginManual)

from rest_framework_simplejwt.views import TokenObtainPairView

# si no se llama la variable asi, tendremos un error
urlpatterns = [
    path('prueba/', vistaPrueba),
    path('recetario/', mostrarRecetario),
    path('recetario/<int:id>', editarRecetario, name='editarRecetario'),
    # as_view > convierte la clase en una vista para que Django la pueda entender y utilizar
    path('platos/',PlatosController.as_view()),
    path('status/', verificarStatusServidor),
    path('crear-ingrediente/', CrearIngrediente.as_view()),
    path('ingredientes/', CrearYListarIngredienteController.as_view()),
    path('ingrediente/<pk>', DevolverListarEliminarIngredienteController.as_view()),
    path('registro/', registrarUsuario),
    path('login/', TokenObtainPairView.as_view()),
    path('login-personalizado/', loginManual)
]
