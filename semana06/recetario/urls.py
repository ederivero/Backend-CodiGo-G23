# Estas son las rutas de todo el proyecto, si no esta declarado aqui no se podra acceder a ese controlador
from django.contrib import admin
from django.urls import path, include
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework.permissions import AllowAny

SwaggerSchema = get_schema_view(
    openapi.Info(
        title='API de Recetarios',
        default_version='v1',
        description='Documentacion para consumir mi API de recetarios',
        contact=openapi.Contact(name='Eduardo', email='ederiveroman@gmail.com')
    ),
    public=True,
    permission_classes=[AllowAny],
)

urlpatterns = [
    path('admin/', admin.site.urls),
    # Agrego todas las rutas declaradas en el archivo urls de gestion para que puedan ser accedidas
    path('gestion/', include('gestion.urls')),
    path('docs/',SwaggerSchema.with_ui('swagger', cache_timeout=0)),
    path('redoc/', SwaggerSchema.with_ui('redoc',cache_timeout=0)),
]
