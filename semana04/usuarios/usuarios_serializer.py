from marshmallow_sqlalchemy import SQLAlchemyAutoSchema, auto_field
from marshmallow.validate import Email, Regexp
from marshmallow import Schema, fields
from modelos import Usuario

class UsuarioSerializer(SQLAlchemyAutoSchema):
    # si quiero modificar el comportamiento de uno de los atributos del modelo
    # si queremos que este atributo sea solamente para cuando se quiera cargar (load)
    # https://marshmallow-sqlalchemy.readthedocs.io/en/latest/api_reference.html#marshmallow_sqlalchemy.auto_field
    # https://marshmallow.readthedocs.io/en/3.x-line/marshmallow.fields.html#base-field-class
    password = auto_field(load_only=True, validate=[Regexp(r'^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@!#$%&*])[A-Za-z0-9@!#$%&*]{8,}$',error='La password debe de tener al menos una mayuscula, al menos una minuscula, al menos un digito y al menos un caracter especial, asi mismo no debe ser menor a 8 caracteres')])
    # auto_field sirve para sobrescribir el comportamiento de un atributo del modelo
    nombre = auto_field()
    # Adicional a solamente mostrar o leer podemos tambien agregar validacion adicional como en el caso del correo para que se cumpla el formato establecido
    correo = auto_field(validate=[Email(error='El correo no cumple con el formato correcto')])

    class Meta:
        model = Usuario

# Asi se crea un serializador sin la necesidad de tener un modelo
class LoginSerializer(Schema):
    correo = fields.Email(required=True)
    password = fields.String(required=True)