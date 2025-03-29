CREATE DATABASE universidad;
\c universidad 

CREATE TABLE estudiantes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE profesores (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE cursos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    profesor_id INT,
    -- ON DELETE SET NULL > permitira la eliminacion del profesor y cambiar la columna profesor_id a NULL
    FOREIGN KEY (profesor_id) REFERENCES profesores(id) ON DELETE SET NULL
);


CREATE TABLE inscripciones (
    id SERIAL PRIMARY KEY,
    estudiante_id INT,
    curso_id INT,
    fecha_inscripcion DATE NOT NULL,
    -- ON DELETE CASCADE > indicara que si se elimina el registro que esta vinculado tambien eliminara en forma de cascada las inscripciones
    FOREIGN KEY (estudiante_id) REFERENCES estudiantes(id) ON DELETE CASCADE,
    FOREIGN KEY (curso_id) REFERENCES cursos(id) ON DELETE CASCADE
);

INSERT INTO estudiantes (nombre) VALUES 
('Ana Martínez'),
('Luis Fernández'),
('Carlos Ramírez'),
('María Gómez');

INSERT INTO profesores (nombre) VALUES 
('Dr. Pedro López'),
('Dra. Sofía Torres'),
('Mtro. Jorge Herrera');

INSERT INTO cursos (nombre, profesor_id) VALUES 
('Matemáticas', 1),
('Historia', 2),
('Programación', 3),
('Física', NULL); 

INSERT INTO inscripciones (estudiante_id, curso_id, fecha_inscripcion) VALUES 
(1, 1, '2024-01-10'),
(1, 3, '2024-01-15'),
(2, 2, '2024-01-20'),
(3, 4, '2024-02-01'), 
(NULL, 3, '2024-02-05'); 


-- Listar los estudiantes con los cursos que tienen
SELECT es.nombre, cur.nombre 
FROM estudiantes AS es 
    INNER JOIN inscripciones AS ins ON es.id = ins.estudiante_id 
    INNER JOIN cursos AS cur ON ins.curso_id = cur.id;

-- Muestren todos los estudiantes incluyendo aquellos que no estan incritos en ningun curso
SELECT es.nombre, cur.nombre 
FROM estudiantes AS es 
    LEFT JOIN inscripciones AS ins ON es.id = ins.estudiante_id 
    LEFT JOIN cursos AS cur ON ins.curso_id = cur.id;

-- Muestren todos los cursos y los estudiantes que estan incritos en ellos
SELECT es.nombre, cur.nombre 
FROM estudiantes AS es 
    INNER JOIN inscripciones AS ins ON es.id = ins.estudiante_id 
    RIGHT JOIN cursos AS cur ON ins.curso_id = cur.id;