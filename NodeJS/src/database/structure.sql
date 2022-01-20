-- Alkemy
-- Nicolás Fernández Carlavan


CREATE DATABASE alkemy_db;
USE alkemy_db;



CREATE TABLE `categories`
(
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar
(30) NOT NULL,
  `image` VARCHAR
(200) NOT NULL,
   PRIMARY KEY
(`id`)
);

CREATE TABLE `types`
(
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar
(10) NOT NULL,
   PRIMARY KEY
(`id`)
);


CREATE TABLE `records`
(
  `id` int NOT NULL AUTO_INCREMENT,
  `type_id` int,
  `category_id` int,
  `concept` varchar
(200) NOT NULL,
  `amount` int NOT NULL,
  `record_date` date not null,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME ON
UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY
(`id`),
  KEY `records_type_id_foreign`
(`type_id`),
  KEY `records_category_id_foreign`
(`category_id`),
  CONSTRAINT `records_type_id_foreign` 
  FOREIGN KEY
(`type_id`) REFERENCES `types`
(`id`),
  CONSTRAINT `records_category_id_foreign` 
  FOREIGN KEY
(`category_id`) REFERENCES `categories`
(`id`)
);

