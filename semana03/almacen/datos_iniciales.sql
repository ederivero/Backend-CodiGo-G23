-- cat datos_iniciales.sql | psql -U postgres -d almacen_flask

INSERT INTO productos VALUES 
(DEFAULT, 'Toronja', 4.2, NULL, true), 
(DEFAULT, 'Platano', 1.5, NULL, true), 
(DEFAULT, 'Membrillo', 1.4, NULL, true), 
(DEFAULT, 'Mandarina sin pepa', 2.1, NULL ,true);