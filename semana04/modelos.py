from instancias import bd
from sqlalchemy import Column, types, ForeignKey
from sqlalchemy.orm import relationship

class Usuario(bd.Model):
    id = Column(type_=types.Integer, autoincrement=True, primary_key=True)
    nombre = Column(type_=types.Text, nullable=False)
    correo = Column(type_=types.Text, unique=True, nullable=False)
    password = Column(type_=types.Text, nullable=False)
    notas = relationship('Nota', backref='usuario')

    __tablename__='usuarios'

class Nota(bd.Model):
    id = Column(type_=types.Integer, autoincrement=True, primary_key=True)
    titulo = Column(type_=types.Text, nullable=False)
    descripcion = Column(type_=types.Text)
    color = Column(type_=types.Text)

    # Relaciones
    usuarioId = Column(ForeignKey(column='usuarios.id'), nullable=False, name='usuario_id')

    __tablename__='notas'