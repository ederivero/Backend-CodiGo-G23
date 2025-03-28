-- Crear una base de datos llamada colegio
CREATE DATABASE colegio;
\c colegio

-- En la base datos crear una tabla llamada alumnos que va a tener la sgte info
-- id serial llave primaria,
-- nombre texto
-- apellido paterno texto puede ser nulo
-- apellido materno texto puede ser nulo
-- correo texto y no se puede repetir (unico)
-- exonerado boolean su valor por defecto sea false
-- fecha_matricula timestamp
CREATE TABLE alumnos (
id SERIAL PRIMARY KEY,
nombre TEXT,
apellido_paterno TEXT NULL,
apellido_materno TEXT NULL,
correo TEXT UNIQUE,
exonerado BOOLEAN DEFAULT false,
fecha_matricula TIMESTAMP );
-- asi mismo agregar los sgtes alumnos
-- 'eduardo', 'perez', 'marquina', 'eperez@gmail.com', false, '2018-01-13'
-- 'lucia', 'martinez','perez', 'lmartinez@gmail.com', false, '2020-03-04'
-- 'roberto', 'manrique', 'vizcarra', 'rmanrique@hotmail.com', true, '2021-02-01'
-- 'ivan', 'yucra', 'perez', 'iyucra@hotmail.com', false, '2023-07-18'
-- 'daniela', 'soncco', null, 'dsoncoo@yahoo.com', true, '2019-05-14' 
INSERT INTO alumnos (nombre, apellido_paterno, apellido_materno, correo, exonerado, fecha_matricula) VALUES
('eduardo', 'perez', 'marquina', 'eperez@gmail.com', false, '2018-01-13'),
('lucia', 'martinez','perez', 'lmartinez@gmail.com', false, '2020-03-04'),
('roberto', 'manrique', 'vizcarra', 'rmanrique@hotmail.com', true, '2021-02-01'),
('ivan', 'yucra', 'perez', 'iyucra@hotmail.com', false, '2023-07-18'),
('daniela', 'soncco', null, 'dsoncoo@yahoo.com', true, '2019-05-14');


CREATE TABLE direcciones (
    id SERIAL PRIMARY KEY,
    calle TEXT NOT NULL,
    numero TEXT,
    referencia TEXT,
    distrito TEXT,
    provincia TEXT,
    -- Ahora creamos la columna que vamos a utilizar para la relacion
    alumno_id INT NOT NULL,
    -- Aqui creamos la relacion
    FOREIGN KEY (alumno_id) REFERENCES alumnos(id)
);


INSERT INTO direcciones VALUES 
(DEFAULT, 'Av Siempre Viva', '123A', 'A media cuadra del policlinico', 'CERCADO', 'AREQUIPA',1),
(DEFAULT, 'Calle Los Girasles', '450', NULL, 'CAYMA', 'AREQUIPA',1),
(DEFAULT, 'Prolongacion Los Pepinos Mz J', 'Lote 3', 'Al frente de la comisaria', 'YURA', 'AREQUIPA',2),
(DEFAULT, 'Calle 3 Lt 2 Etapa 1 Dpto 102', '678', 'A dos cuadras del oxxo', 'SOCABAYA', 'AREQUIPA',3);


-- Inner join sirve para obtener todo lo que tenga las dos tablas en comun, es decir todos los alumnos que tengan direcciones y todas las direcciones que le pertenezcan a los alumnos
SELECT * FROM alumnos INNER JOIN direcciones ON alumnos.id = direcciones.alumno_id;

-- Left join > devolvera todos los registros de la izquierda y si tienen registros en la derecha los incluira
SELECT * FROM alumnos LEFT JOIN direcciones ON alumnos.id = direcciones.alumno_id;

-- Right join > devolvera todos los registros de la derecha y si tienen registros en la izquierda
SELECT * FROM alumnos RIGHT JOIN direcciones ON alumnos.id = direcciones.alumno_id;

-- Full outer join > devolvera todos los registros de ambas tablas aun asi no tengan algo en comun
SELECT * FROM alumnos FULL OUTER JOIN direcciones ON alumnos.id = direcciones.alumno_id;

-- Adicional a ello, se le pueden poner ALIAS a las tablas para evitar llamarlas completamente
SELECT * FROM alumnos AS al INNER JOIN direcciones AS di ON al.id = di.alumno_id;


-- Obtener los nombre, apellido_paterno, apellido_materno y correo de todos los alumnos que vivan en SOCABAYA
SELECT nombre, apellido_paterno, apellido_materno, correo FROM alumnos AS a INNER JOIN direcciones AS d ON a.id = d.alumno_id WHERE d.distrito = 'SOCABAYA';

-- Obtener los nombre, apellido_paterno, calle y distrito
SELECT nombre, apellido_paterno, calle, distrito FROM alumnos AS a INNER JOIN direcciones AS d ON a.id = d.alumno_id;

-- Obtener los registros de los alumnos que no esten exonerados y que vivan en CERCADO o CAYMA
SELECT DISTINCT a.* FROM alumnos AS a INNER JOIN direcciones AS d ON a.id = d.alumno_id WHERE a.exonerado = false AND d.distrito IN ('CERCADO', 'CAYMA');

SELECT * FROM alumnos AS a INNER JOIN direcciones AS d ON a.id = d.alumno_id WHERE a.exonerado = false AND (d.distrito = 'CERCADO' OR d.distrito = 'CAYMA');

-- Obtener los nombre, apellido_paterno y calle de las direcciones que no tengan referencia 
SELECT nombre, apellido_paterno, calle FROM alumnos AS a INNER JOIN direcciones AS d ON a.id = d.alumno_id WHERE d.referencia IS NULL;

-- Cuando usamos una columna que pueda contener valores NULOS y esta la queremos comparamos en vez de usar el '=' usamos la palabra 'IS' porque NULL no es un estado o un valor del texto