from sqlalchemy import Column, types, ForeignKey
from sqlalchemy.orm import relationship 
from instancias import db
from datetime import datetime

class Producto(db.Model):
    id = Column(type_=types.Integer, autoincrement=True, primary_key=True)
    nombre = Column(type_=types.Text, nullable=False)
    precio = Column(type_=types.Float, nullable=False)
    descripcion = Column(type_=types.Text)
    disponible = Column(type_=types.Boolean, default=True)
    detalleOrdenes = relationship('DetalleOrden', backref='producto')

    __tablename__='productos'

class Orden(db.Model):
    id = Column(type_=types.Integer, autoincrement=True, primary_key=True)
    numeroOrden = Column(type_=types.Text, nullable=False, unique=True, name='numero_orden')
    fecha = Column(type_=types.DateTime, default=datetime.now)
    total = Column(type_=types.Float, default=0.0)
    detalleOrdenes = relationship('DetalleOrden', backref='orden')

    __tablename__='ordenes'

class DetalleOrden(db.Model):
    id = Column(type_=types.Integer, autoincrement=True, primary_key=True)
    cantidad = Column(type_=types.Integer,nullable=False)
    precioUnitario = Column(type_=types.Float, nullable=False, name='precio_unitario')
    total = Column(type_=types.Float, default=0.0)
    # RELACIONES
    ordenId = Column(ForeignKey(column='ordenes.id'), nullable=False, name='orden_id')
    productoId = Column(ForeignKey(column='productos.id'), nullable=False, name='producto_id')

    __tablename__='detalle_ordenes'