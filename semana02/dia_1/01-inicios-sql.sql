-- Scripts > Archivos ejecutables de base de datos
-- SQL > Structured Query Language
-- DDL > Data Definition Language
-- CREATE, ALTER, DROP
-- Toda instruccion siempre debe terminar con un ;
CREATE DATABASE pruebas;

\list -- sirve para poder ver las bases de datos creadas en el servidor

\c NOMBRE_BASE_DE_DATOS -- usar otra base de datos a la cual tengamos acceso  

CREATE TABLE personas (
    id                  SERIAL PRIMARY KEY,
    nombre              TEXT NOT NULL,
    apellido            TEXT,
    correo              TEXT UNIQUE, -- El correo no se puede repetir entre dos o mas personas
    fecha_nacimiento    TIMESTAMP
);

\d -- Para ver todas las tablas de mi base de datos

\d NOMBRE_TABLA -- mostrara la informacion de la tabla con sus columnas

\dt -- Mostrara solamente las tablas de la base de datos