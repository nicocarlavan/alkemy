-- Alkemy
-- Nicolás Fernández Carlavan
-- Datos de prueba


USE alkemy_db;


LOCK TABLES `categories` WRITE;
INSERT INTO `categories` (
category,
image
)
VALUES
('Comida', 'img-category-comida.jpg'),
('Salidas', 'img-category-salidas.jpg'),
('Sueldo', 'img-category-sueldo.jpg'),
('Ventas', 'img-category-ventas.jpg'),
('Servicios', 'img-category-servicios.jpg'),
('Impuestos', 'img-category-impuestos.jpg'),
('Varios', 'img-category-varios.jpg');
UNLOCK TABLES;


LOCK TABLES `types` WRITE;
INSERT INTO `types` (
type
)
VALUES
    ('Ingreso'),
    ('Egreso');
UNLOCK TABLES;



LOCK TABLES `records` WRITE;
INSERT INTO `records` (
type_id,
category_id,
concept,
amount,
record_date
)
VALUES
(1, 3, 'Programador Full Stack', 220000, '2021-12-12'),
(2, 1, 'Supermercado', 4760, '2021-12-17'),
(2, 2, 'Cine', 800, '2022-01-11'),
(1, 4, 'Pagina web cliente 21', 25000, '2022-01-03'),
(1, 4, 'Mantenimiento pagina web cliente 14', 5000, '2022-01-10'),
(2, 5, 'Internet fibra optica', 3200, '2022-01-05'),
(1, 3, 'Soporte tecnico part time', 18000, '2021-12-27'),
(2, 5, 'Edenor', 1000, '2022-01-12'),
(2, 5, 'Claro Celular', 2200, '2022-01-18'),
(2, 6, 'ABL', 800, '2022-01-20');
UNLOCK TABLES;