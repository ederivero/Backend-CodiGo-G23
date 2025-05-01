# Estas son las rutas de todo el proyecto, si no esta declarado aqui no se podra acceder a ese controlador
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # Agrego todas las rutas declaradas en el archivo urls de gestion para que puedan ser accedidas
    path('gestion/', include('gestion.urls')),
]
