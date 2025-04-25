from marshmallow_sqlalchemy import SQLAlchemyAutoSchema, auto_field
from modelos import Usuario, TipoUsuario
from marshmallow.validate import Regexp, Email
from marshmallow_enum import EnumField


class RegistrarUsuarioSerializer(SQLAlchemyAutoSchema):
    password = auto_field(load_only=True, validate=[Regexp(
        r'^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,}$',
        error='El password debe tener al menos una mayus, una minus, un numero y un caracter especial y no menor a 8 caracteres')])
    correo = auto_field(validate=[Email(error='Correo invalido.')])
    # Para las columnas que son de tipo Enum tenemos que declarar este comportamiento ya que marshmallow_sqlalchemy no es capaz de hacer esta validacion cuando es un Enum
    tipoUsuario = EnumField(TipoUsuario)

    class Meta:
        model = Usuario
