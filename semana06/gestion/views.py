from datetime import datetime
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.generics import CreateAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.viewsets import ViewSet
from .serializers import PlatoSerializer, IngredienteSerializer, RegistroUsuarioSerializer
from .models import Plato, Ingrediente, Usuario
# IsAuthenticatedOrReadOnly > Si es un metodo get no es necesario estar autenticado, sin embargo si es otro metodo es obligatorio
# IsAuthenticated > Siempre tiene que estar autenticado para cualquier metodo
# IsAdminUser > Solamente los usuarios que son superusuarios (is_superuser =true) van a poder acceder a los metodos
# AllowAny > Permite a cualquiera (autenticado o no) poder acceder a los metodos
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import AnonymousUser
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi


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

    # si quiero que esta clase utilicen una forma de autenticar y verificar al usuario registrado 
    permission_classes= [IsAuthenticated]

    @swagger_auto_schema(
            responses={
                200:openapi.Schema(type=openapi.TYPE_OBJECT, properties={
                    'message': openapi.Schema(type=openapi.TYPE_STRING, description='Los platos son'),
                    'content': openapi.Schema(type=openapi.TYPE_ARRAY, items=openapi.Schema(type=openapi.TYPE_OBJECT, properties= {
                        'id': openapi.Schema(type=openapi.TYPE_INTEGER, description='1'),
                        'nombre': openapi.Schema(type=openapi.TYPE_STRING, description='Ceviche'),
                        'descripcion': openapi.Schema(type=openapi.TYPE_STRING, description='Delicioso plato'),
                        'usuarioId': openapi.Schema(type=openapi.TYPE_INTEGER, description='1'),
                        'esPublico': openapi.Schema(type=openapi.TYPE_BOOLEAN, description='Estado'),
                    }, example = {
                        'id': 1,
                        'nombre': 'Ceviche',
                        'descripcion': 'Delicioso ceviche',
                        'usuarioId': 3,
                        'esPublico': False
                    }))
                    }),
                401: openapi.Schema(type=openapi.TYPE_OBJECT, properties={
                    'detail': openapi.Schema(type=openapi.TYPE_STRING, description='Authentication credentials were not provided."')
                })})
    def get(self, request:Request):
        queryParams = request.query_params
        totalQueryParams = len(queryParams.keys())
        filtros = {}

        # request.auth > Muestra el formato por el cual estoy haciendo la autenticacion (TOKEN)
        # request.user > Muestra la instancia del usuario que esta autenticado, si no hay usuario la instancia sera AnonymousUser
        print(request.user.id)
        

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
        
        # Aqui agregamos el filtro para solamente retornar los platos que me pertenecen
        filtros['usuarioId'] = request.user.id
        
        # https://docs.djangoproject.com/en/5.2/topics/db/queries/#field-lookups
        # SELECT * FROM platos WHERE nombre ILIKE 'gallina'
        platos = Plato.objects.filter(**filtros).all()
        serializer = PlatoSerializer(instance = platos, many=True)
        
        return Response(data={
            'message': 'Los platos son',
            'content': serializer.data
        })
    
    
    @swagger_auto_schema(
            request_body=PlatoSerializer
    )
    def post(self, request:Request):
        data = request.data

        # ahora antes de validar la data ingresamos el usuarioId a nuestra informacion para que sea validada
        data['usuarioId'] = request.user.id

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

class CrearIngredienteController(CreateAPIView):
    # serializador
    serializer_class= IngredienteSerializer
    # la consulta para la base de datos
    queryset = Ingrediente.objects.all()
    permission_classes =[IsAuthenticated]

    def post(self, request):
        # Podemos modificar el comportamiento de los metodos de la clase generica de vistas
        usuarioId = request.user.id
        print(usuarioId)
        # 1. obtener el plato al cual se quiere ingresar el ingrediente (platoId)
        platoEncontrado = Plato.objects.filter(id = request.data.get('platoId')).first()
        if not platoEncontrado:
            return Response(data={
                'message': 'Plato a ingresar no existe'
            }, status=status.HTTP_404_NOT_FOUND)
        
        # 2. en ese plato ver a que usuario le pertenece
        usuarioPertenece =platoEncontrado.usuarioId.id
        # 3. Si el usuario propietario es diferente del usuario identificado no permitir el registro

        if usuarioPertenece != usuarioId:
            return Response(data={
                'message':'El usuario no tiene acceso a este plato'
            },status=status.HTTP_403_FORBIDDEN)

        serializador = self.serializer_class(data=request.data)

        if serializador.is_valid():
            # Nos retornara el ingrediente creado en la base de datos
            ingredienteCreado = serializador.save()

            resultado = self.serializer_class(instance = ingredienteCreado)
            dataResultado = resultado.data

            return Response(data=dataResultado,status=status.HTTP_201_CREATED)
        else:
            return Response(data=serializador.errors)

class DevolverListarEliminarIngredienteController(RetrieveUpdateDestroyAPIView):
    # https://www.django-rest-framework.org/api-guide/generic-views/#genericapiview
    serializer_class = IngredienteSerializer
    queryset = Ingrediente.objects.all()


@swagger_auto_schema(
    request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        required=['correo', 'password', 'nombre'], # campos requeridos del body
        properties={
            'nombre': openapi.Schema(type=openapi.TYPE_STRING, description='Nombre del cheff'),
            'correo': openapi.Schema(type=openapi.TYPE_STRING, description='Correo del cheff'),
            'password': openapi.Schema(type=openapi.TYPE_STRING, description='Password con no menor a 6 caracteres')
        },example = {
            'nombre': 'Jhon Doe',
            'correo': 'jhon@email.com',
            'password': 'Welcome123!'
        }
    ),
    methods=['POST'],
    responses={201:'Usuario creado exitosamente',400:'Error al crear el usuario'}
)
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

@api_view(http_method_names=['POST'])
def loginManual(request):
    data = request.data
    usuarioEncontrado = Usuario.objects.filter(correo = data.get('correo')).first()

    if not usuarioEncontrado:
        return Response(data={
            'message': 'Usuario no existe'
        }, status = status.HTTP_404_NOT_FOUND)
    
    passwordCorrecto = usuarioEncontrado.check_password(data.get('password'))

    if not passwordCorrecto:
        return Response(data={
            'message': 'Credenciales incorrectas'
        }, status=status.HTTP_403_FORBIDDEN)
    
    # Asi se crea una access token de manera manual
    token = RefreshToken.for_user(usuarioEncontrado)
    return Response(data={
        'token':  token.access_token.__str__()
    })

class PlatoViewset(ViewSet):
    # aca podemos implementar un monton de metodos (doble get)
    # si quiero devolver un monto de platos puedo usar el metodo list
    def list(self, request):
        pass

    # si quiero devolver un solo plato mediante su pk
    def retrieve(self,request, pk):
        platoEncontrado = Plato.objects.filter(id = pk).first()
        if not platoEncontrado:
            return Response(data={
                'message':'Plato no existe'
            }, status=status.HTTP_404_NOT_FOUND)
        
        if not platoEncontrado.esPublico:
            # type() > Indicara que tipo de dato o clase a la cual pertenece esta variable
            if type(request.user) == AnonymousUser:
                return Response(data={
                    'message':'Se necesita una token para esta peticion'
                }, status=status.HTTP_400_BAD_REQUEST)
            else:
                # si esta autenticado el usuario pero ahora tendremos que ver si le pertenece este plato
                
                if platoEncontrado.usuarioId.id != request.user.id:
                    return Response(data={
                        'message':'Credenciales incorrectas'
                    }, status=status.HTTP_403_FORBIDDEN)

        serializer = PlatoSerializer(instance = platoEncontrado)
        
        # Cuando ingreso a un atributo creado desde el related_name este me devolvera la instancia de la clase ya con sus objects 
        print(platoEncontrado.ingredientes.all()) 
        return Response(data = {
            'content': serializer.data
        })

    # si quiero hacer una creacion (post)
    def create(self, request):
        pass

    # si quiero hacer una actualizacion total (put)
    def update(self, request, pk=None):
        pass

    # si quiero hacer una actualizacion parcial solamente unos cuantos campos, no todos (patch)
    def partial_update(self, request, pk=None):
        pass

    # si quiero hacer una eliminacion (delete)
    def destroy(self, request, pk=None):
        pass