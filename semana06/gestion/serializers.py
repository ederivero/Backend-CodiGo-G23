from rest_framework.serializers import ModelSerializer
from .models import Plato, Ingrediente, Usuario

class IngredienteSerializer(ModelSerializer):
    class Meta:
        model = Ingrediente
        fields = '__all__'


class PlatoSerializer(ModelSerializer):
    # defino mi atributo de mis relaciones
    # como es una relacion de 1-n entonces indicare que le voy a pasar un arreglo de ingredientes
    # si queremos que este atributo solo sea para poder visualizar indicaremos que sea read_only
    ingredientes = IngredienteSerializer(many=True, read_only=True)
    class Meta:
        model = Plato
        # fields | exclude
        # fields > indicaran que columnas (atributos) de la clase yo debo usar en este serializador
        # exclude > indica que columnas (atributos) yo debo excluir
        # solamente se usa uno de los dos
        # si quiero utilizar todos los fields puedo poner de valor '__all__'
        fields = '__all__'
        # fields = ['id']


class RegistroUsuarioSerializer(ModelSerializer):
    class Meta: 
        model = Usuario
        fields = "__all__"
