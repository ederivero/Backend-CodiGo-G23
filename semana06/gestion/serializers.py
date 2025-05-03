from rest_framework.serializers import ModelSerializer
from .models import Plato

class PlatoSerializer(ModelSerializer):
    class Meta:
        model = Plato
        # fields | exclude
        # fields > indicaran que columnas (atributos) de la clase yo debo usar en este serializador
        # exclude > indica que columnas (atributos) yo debo excluir
        # solamente se usa uno de los dos
        # si quiero utilizar todos los fields puedo poner de valor '__all__'
        fields = '__all__'
        # fields = ['id']