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

-- DML > Data Manipulation Language
-- Manipular o gestionar la informacion

INSERT INTO personas (nombre, apellido, correo, fecha_nacimiento) VALUES 
                     ('Eduardo', 'de Rivero', 'ederiveroman@gmail.com', '1990-07-28');

-- Si quiero insertar mas de un registro usamos el mismo comando de INSERT
INSERT INTO personas (id, nombre, apellido, correo, fecha_nacimiento) VALUES
                     (DEFAULT, 'Martin', 'Quispe', 'mquispe@gmail.com', '1999-05-01'),
                     (DEFAULT, 'Nikol', 'Baldarrago', 'nbaldarrago@hotmail.com', '2001-09-18');

-- otra forma de insertar sin declarar las columnas es
-- Si no declaro las columnas entonces SI O SI TENGO que utilizar el orden con el cual he creado la tabla
INSERT INTO personas VALUES (DEFAULT, 'Maria', 'Zegarra', 'mzegarra@hotmail.com', '2002-02-01');

SELECT id, nombre, nombre FROM personas;

-- Si al select queremos agregar una condicion esta ira justo despues de las tablas que estamos utilizando
SELECT * FROM personas WHERE id = 1;

-- Las condiciones no solamente son para poder hacer comparaciones directas sino tambien, en el caso de los numeros, para poder hacer menor, menor que, mayor o mayor que
SELECT * FROM personas WHERE id > 2;

-- Si queremos agregar otra condicion a nuestro WHERE se puede utilizar el operador AND o OR
SELECT * FROM personas WHERE id > 2 AND nombre ='Nikol';

-- Necesito todas las personas que tengan el id entre 2 y 4 
SELECT * FROM personas WHERE id >= 2 AND id <= 4;

-- BETWEEN > se podra agregar un par de valores y estos valores serviran para poder encontrar los registros entre esos parametros
SELECT * FROM personas WHERE id BETWEEN 2 AND 4;

-- Buscar todas las personas que se llamen Eduardo o Martin
SELECT * FROM personas WHERE nombre IN ('Eduardo', 'Martin');

-- Otra gran herramienta de busqueda es cuando queremos una coincidencia
-- % > no me interesa lo que este antes
SELECT * FROM personas WHERE nombre LIKE '%do';

-- Que comience con do
SELECT * FROM personas WHERE nombre LIKE 'do%';

-- Que contenga en cualquier lado ya sea al comienzo al medio o al final la pabra do
SELECT * FROM personas WHERE nombre LIKE '%do%';

-- A diferencia del LIKE el ILIKE no respeta mayus o minus
SELECT * FROM personas WHERE nombre ILIKE '%edu%';

-- Asi como el % sirve para indicar lo que esta antes o despues
-- Tambien tenemos el _ que sirve para indicar una posicion exacta del caracter

-- Mostrar todas las personas que tengan correo hotmail
SELECT * FROM personas WHERE correo ILIKE '%@hotmail.com';

-- Mostrar todas las personas que tengan nombre con la vocal a, o que sean mayores del 01 de enero del 2001
SELECT * FROM personas WHERE nombre ILIKE '%a%' OR fecha_nacimiento > '2001-01-01';

-- Mostrar todas las personas que tengan en su cuarta posicion la letra a 
SELECT * FROM personas WHERE nombre ILIKE '___a%';

-- Para actualizar un registro se tiene que declara la nueva data y SIEMPRE usar una condicion para evitar actualizaciones a registros incorrectos
UPDATE personas SET nombre = 'Ramiro' WHERE id = 1;

UPDATE personas SET nombre = 'Ramiro', correo = 'ramiro@gmail.com' WHERE id = 1;

-- TRANSACCION es una o varias Operaciones que pueden ser revertidas, es decir, actualizaciones, inserciones y eliminaciones que si queremos que no perduren o que todo se deshaga podemos hacer lo mediante la transaccion, caso contrario sera imposible

-- Delete permite eliminar el registro de la bd de manera permanente a no ser que este dentro de una transaccion
DELETE FROM personas WHERE id = 2;