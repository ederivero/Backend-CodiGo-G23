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
