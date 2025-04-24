from sqlalchemy import types, Column, ForeignKey, func
from sqlalchemy.orm import relationship
from instancias import conexionBD
from uuid import uuid4
from enum import Enum


class TipoUsuario(Enum):
    ADMIN = 'ADMIN'
    CLIENTE = 'CLIENTE'
    PERSONAL = 'PERSONAL'


class EstadoReserva(Enum):
    CREADO = 'CREADO'
    PAGADO = 'PAGADO'
    CANCELADO = 'CANCELADO'


class Usuario(conexionBD.Model):
    id = Column(type_=types.UUID(), default=uuid4, primary_key=True)
    nombre = Column(type_=types.Text, nullable=False)
    correo = Column(type_=types.Text, nullable=False, unique=True)
    password = Column(type_=types.Text, nullable=False)
    tipoUsuario = Column(type_=types.Enum(TipoUsuario),
                         default=TipoUsuario.CLIENTE, name='tipo_usuario')

    __tablename__ = 'usuarios'


class Cancha(conexionBD.Model):
    id = Column(type_=types.UUID(), default=uuid4, primary_key=True)
    nombre = Column(type_=types.Text, nullable=False)
    disponible = Column(type_=types.Boolean, default=True)

    __tablename__ = 'canchas'


class Reserva(conexionBD.Model):
    id = Column(type_=types.UUID(), default=uuid4, primary_key=True)
    dia = Column(type_=types.Date, nullable=False)
    horaInicio = Column(type_=types.Time, nullable=False, name='hora_inicio')
    horaFin = Column(type_=types.Time, nullable=False, name='hora_fin')
    estado = Column(type_=types.Enum(EstadoReserva))
    precio = Column(type_=types.Float(precision=2))
    # Campos que sirve para hacer auditoria (validar data ingresada, etc)
    createdAt = Column(type_=types.DateTime(timezone=False),
                       default=func.now(), name='created_at')
    # onupdate > parametro que sirve para indicar que valor debe tener esa columna cuando se actualice un registro
    updatedAt = Column(type_=types.DateTime(timezone=False),
                       onupdate=func.now(), name='updated_at')

    usuarioId = Column(ForeignKey(column='usuarios.id'),
                       nullable=False, name='usuario_id')
    canchaId = Column(ForeignKey(column='canchas.id'),
                      nullable=False, name='cancha_id')

    __tablename__ = 'reservas'
