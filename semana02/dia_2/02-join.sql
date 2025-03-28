-- Crear una base de datos llamada comercio
CREATE DATABASE comercio;

\c comercio
-- en la cual tendremos tres tablas 
-- una llamada clientes que tendra su
-- id serial pk, nombre text not null, ruc text
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    ruc TEXT
);
-- la tabla productos
-- id serial pk, nombre text, precio_unitario float,
-- disponible boolean
CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    nombre TEXT,
    precio_unitario FLOAT,
    disponible BOOLEAN
);

-- otra tabla llamada pedidos
-- id serial pk, cliente_id que sera la relacion
-- producto_id que sera la relacion con productos
-- cantidad que sera un entero y no puede ser null
-- precio que sera un float
 CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    cliente_id INT NOT NULL,
    producto_id INT NOT NULL,
    cantidad INT NOT NULL,
    precio FLOAT,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

-- los registros 
-- 'los chocheras', '10674885762'
-- 'transp margarita', '10586784952'
-- 'los visionarios SAC', '10697895362'
INSERT INTO clientes (nombre, ruc) VALUES 
    ('los chocheras', '10674885762'),
    ('transp margarita', '10586784952'),
    ('los visionarios SAC', '10697895362');

-- 'galletas de vainilla', 4.5, true
-- 'gaseosa 1lt', 5.4, true
-- 'chichazara', 2.2, true
-- 'melones', 4.2, false
INSERT INTO productos (nombre, precio_unitario, disponible) VALUES
    ('galletas de vainilla', 4.5, true),
    ('gaseosa 1lt', 5.4, true),
    ('chichazara', 2.2, true),
    ('melones', 4.2, false);

-- 1, 1, 10, 45
-- 1, 2, 5, 27
-- 2, 3, 3, 6.6
-- 2, 1, 5, 22.5
INSERT INTO pedidos (cliente_id, producto_id, cantidad, precio) VALUES
    (1, 1, 10, 45),
    (1, 2, 5, 27),
    (2, 3, 3, 6.6),
    (2, 1, 5, 22.5);

-- TODOS LOS PEDIDOS DEL CLIENTE 1
 SELECT * FROM pedidos WHERE cliente_id = 1;

-- Los productos que tienen pedidos
SELECT DISTINCT pro.* 
FROM productos AS pro INNER JOIN pedidos AS pe ON pro.id = pe.producto_id;

-- Que productos no tienen pedidos
SELECT pro.* 
FROM productos AS pro LEFT JOIN pedidos AS pe ON pro.id = pe.producto_id 
WHERE pe.id IS NULL;

-- Que productos ah comprado el cliente numero 1
SELECT prod.* 
FROM clientes AS cli 
    INNER JOIN pedidos AS ped ON cli.id = ped.cliente_id 
    INNER JOIN productos AS prod ON ped.producto_id = prod.id 
WHERE cli.id = 1;