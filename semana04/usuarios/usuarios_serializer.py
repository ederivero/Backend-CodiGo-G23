from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from modelos import Usuario

class UsuarioSerializer(SQLAlchemyAutoSchema):
    class Meta:
        model = Usuario
    