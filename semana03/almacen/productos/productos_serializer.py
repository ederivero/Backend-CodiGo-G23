from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from models import Producto

class ProductoSerializer(SQLAlchemyAutoSchema):
    class Meta:
        model = Producto