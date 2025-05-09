from django.db import models
# AbstractBaseUser puedo modificar de 0 todas mis configuraciones de la tabla auth_user
# mientras que la clase AbstractUser solamente me permite agregar propiedades (columnas) a la tabla
# PermissionsMixin me permite modificar como estan los permisos relacionados con esta tabla
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
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

class ManejadorUsuario(BaseUserManager):
    # Indicar la forma en la cual se va a manejar el usuario desde varias formas dentro de la aplicacion, usa de ellas seria cuando deseemos crear el usuario por la terminal y otra cuando querramos utilizar el usuario en el login 
    def create_superuser(self, nombre, correo, password):
        # py manage.py createsuperuser
        if not correo:
            raise ValueError('El correo es obligatorio')
        
        # quita los espacios al comienzo y al final y lo convierte todo a minusculas para evitar correos incorrectos
        nuevoCorreo = self.normalize_email(correo)
        nuevoUsuario = self.model(correo= nuevoCorreo, nombre = nombre)
        # generamos el hash del password
        nuevoUsuario.set_password(password)
        nuevoUsuario.is_superuser = True
        nuevoUsuario.is_staff = True

        nuevoUsuario.save()


class Usuario(AbstractBaseUser, PermissionsMixin):
    id = models.AutoField(primary_key=True)
    nombre = models.TextField(null=False)
    # Al momento de guardar y actualizar el registro validara que cumpla con el patron de los correos aun asi estemos usando o no los serializadores
    correo = models.EmailField(unique=True, null=False)
    # Al heredar el AbstractBaseUser ya jalamos algunas propiedades como el password
    password = models.TextField(null=False)

    # Ahora agregare algunas otras columnas que ya tiene el modelo auth_user

    # indica si el usuario puede o no puede ingresar al panel administrativo (si trabaja en el proyecto)
    is_staff = models.BooleanField(default=False)

    # indica si el usuario esta habilitado para poder realizar operaciones dentro del panel administrativo
    is_active = models.BooleanField(default=True)

    # Indica que columna va a utilizar en el login del panel administrativo para identificar al usuario
    USERNAME_FIELD = 'correo'

    
    # Indica que atributos debe de solicitar la terminal cuando queremos crear un superusuario
    # py manage.py createsuperuser
    # Nota: No se debe agregar aqui ni el USERNAME_FIELD ni el password porque ya son requeridos por defecto
    REQUIRED_FIELDS = ['nombre']

    # Sirve para indicar el comportamiento de nuestro model de usuario con la clase del manejador
    objects = ManejadorUsuario()
    class Meta:
        db_table = 'usuarios'