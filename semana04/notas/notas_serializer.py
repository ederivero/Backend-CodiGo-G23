from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from modelos import Nota


class NotaSerializer(SQLAlchemyAutoSchema):
    class Meta:
        model = Nota
