from django.db import models


# https://docs.djangoproject.com/en/5.2/ref/models/fields/
class Plato(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.TextField(null=False)
    descripcion = models.TextField()

    class Meta:
        # https://docs.djangoproject.com/en/5.2/ref/models/options/
        # gestion_plato
        db_table = 'platos'
        # Sirve para modificar el ordenamiento predeterminado de la base de datos
        # 'nombre'  > ordenara de manera ascendente
        # '-nombre' > ordenara de manera descendente
        ordering = ['nombre']

class Ingrediente(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.TextField(null=False)
    cantidad = models.TextField(null=False)

    # Cuando queremos agregar una relacion entre dos tablas podemos indicar cual sera su comportamiento a nivel de base de datos con la eliminacion
    # CASCADE > Si se elimina un plato se eliminara sus ingredientes
    # PROTECT > evita la eliminacion del plato si es que este tiene ingredientes y emite un error de tipo ProectedError
    # RESTRICT > hace lo mismo que el protect pero emite un error de tipo RestrictedError
    # SET_NULL > permite la eliminacion del plato y a sus ingredientes les cambia el valor a null, PERO esta columna tiene que tener la opcion de admitir valores nulos
    # SET_DEFAULT > permite la eliminacion y cambiara el valor del plato_id a un valor definir por defecto
    # DO_NOTHING > permite la eliminacion del plato y no cambia el valor de la llave foranea dejando asi un error a nivel de base de datos porque no se podra vincular correctamente la informacion
    
    # related_name > sucede muy similar como el relationship en SQLALCHEMY en el cual creara un atributo virtual en el plato para poder acceder a todos sus ingredientes
    platoId = models.ForeignKey(
        to=Plato, 
        db_column='plato_id', 
        on_delete=models.PROTECT, 
        related_name='ingredientes',
        null=False)
    
    class Meta:
        db_table='ingredientes'


class Preparacion(models.Model):
    id = models.AutoField(primary_key=True)
    descripcion = models.TextField(null=False)
    orden = models.IntegerField(null=False)
    platoId = models.ForeignKey(to=Plato, 
                                db_column='plato_id', 
                                on_delete=models.PROTECT, 
                                related_name='preparaciones',
                                null=False)
    
    class Meta:
        db_table = 'preparaciones'
        # Crea una unicidad entre dos o mas columnas, indicando que estas no se pueden repetir los valores en comun
        # Que jamas se puede repetir el orden con un platoId
        #    orden     |       platoId
        #      1       |          1      ✅
        #      2       |          1      ✅
        #      1       |          1      ❌ (porque ya existe esa combinacion)
        #      1       |          2      ✅
        unique_together = [['orden','platoId']]