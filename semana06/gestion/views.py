from django.shortcuts import render
from django.http import HttpResponse
from .models import Plato


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