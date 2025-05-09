from datetime import datetime
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.generics import CreateAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .serializers import PlatoSerializer, IngredienteSerializer, RegistroUsuarioSerializer
from .models import Plato, Ingrediente, Usuario

def vistaPrueba(request):
    print(request)

    return HttpResponse(content='Hola')

def mostrarRecetario(request):
    # SELECT * FROM platos;
    platos = Plato.objects.all()
    
    # el contexto siempre debe de ser un dict
    return render(request=request, template_name='mostrar_recetario.html', context={"platos": platos})

def editarRecetario(request, id):
    plato = Plato.objects.filter(id = id).first()
    
    return render(request=request, template_name='editar_recetario.html', context={"plato": plato})

class PlatosController(APIView):
    # https://www.django-rest-framework.org/api-guide/views/
    # cada metodo respondera a un metodo HTTP
    def get(self, request:Request):
        queryParams = request.query_params
        totalQueryParams = len(queryParams.keys())
        filtros = {}

        if (queryParams):
            if (queryParams.get('nombre')):
                filtros['nombre__icontains'] = queryParams.get('nombre')
            
            if (queryParams.get('id')):
                filtros['id'] = queryParams.get('id')

        totalFiltrosABuscar = len(filtros.keys())

        if (totalQueryParams != totalFiltrosABuscar):
            return Response(data={
                'message':'Parametro incorrecto'
            })

        # https://docs.djangoproject.com/en/5.2/topics/db/queries/#field-lookups
        # SELECT * FROM platos WHERE nombre ILIKE 'gallina'
        platos = Plato.objects.filter(**filtros).all()
        serializer = PlatoSerializer(instance = platos, many=True)
        
        return Response(data={
            'message': 'Los platos son',
            'content': serializer.data
        })
    
    def post(self, request:Request):
        data = request.data

        serializer = PlatoSerializer(data=data)
        # valida la data para ver si es o no es correcta
        dataValida = serializer.is_valid()
        if dataValida:
            # Creando un registro mediante el serilizador
            serializer.save()

            # Creando un registro mediante el ORM
            # dataValidada = serializer.validated_data
            # nuevoPlato = Plato(**dataValidada)
            # nuevoPlato.save()

            return Response(data={
                'message':'Plato creado exitosamente',
                'content': serializer.data # devolvemos la informacion serializada
            }, status=status.HTTP_201_CREATED)
        else:
            return Response(data={
                'message':'Error al crear el plato',
                'content': serializer.errors # muestra los errores del porque la data no es valida
            }, status=status.HTTP_400_BAD_REQUEST)

@api_view(http_method_names=['GET'])
def verificarStatusServidor(request):
    horaSistema = datetime.now()
    return Response(data = {
        'message':'El servidor esta funcionando correctamente',
        # strftime > string from time > convierte la fecha y hora a un string utilizando un patron
        # https://www.programiz.com/python-programming/datetime/strftime
        'content': horaSistema.strftime('%d-%m-%Y %H:%M:%S')
    })

class CrearIngrediente(CreateAPIView):
    # serializador
    serializer_class = IngredienteSerializer
    # la consulta para la base de datos
    queryset = Ingrediente.objects.all()

class CrearYListarIngredienteController(ListCreateAPIView):
    serializer_class= IngredienteSerializer
    queryset = Ingrediente.objects.all()

class DevolverListarEliminarIngredienteController(RetrieveUpdateDestroyAPIView):
    # https://www.django-rest-framework.org/api-guide/generic-views/#genericapiview
    serializer_class = IngredienteSerializer
    queryset = Ingrediente.objects.all()

@api_view(http_method_names=['POST'])
def registrarUsuario(request):
    serializador = RegistroUsuarioSerializer(data =request.data)
    if serializador.is_valid():
        # validated_data es una variable que solamente va a tener contenido cuando se mande a llamar a la funcion is_valid()
        nombre = serializador.validated_data.get('nombre')
        correo = serializador.validated_data.get('correo') 
        password = serializador.validated_data.get('password')

        nuevoUsuario = Usuario(nombre = nombre, 
                               correo = correo)
        
        # ahora generamos el hash del password
        nuevoUsuario.set_password(password)
        nuevoUsuario.save()

        return Response(data={
            'message':'Usuario creado exitosamente'
        }, status=status.HTTP_201_CREATED)
    else:
        return Response(data={
            'message':'Error al crear el usuario',
            'content': serializador.errors
        }, status = status.HTTP_400_BAD_REQUEST)