from marshmallow_sqlalchemy import SQLAlchemyAutoSchema, auto_field
from modelos import Usuario
from marshmallow.validate import Regexp, Email


class RegistrarUsuarioSerializer(SQLAlchemyAutoSchema):
    password = auto_field(load_only=True, validate=[Regexp(
        r'^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@!#$%&*])[A-Za-z0-9@!#$%&*]{8,}$',
        error='El password debe tener al menos una mayus, una minus, un numero y un caracter especial y no menor a 8 caracteres')])
    correo = auto_field(validate=[Email()])

    class Meta:
        model = Usuario
