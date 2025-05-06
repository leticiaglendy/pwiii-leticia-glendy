CREATE DATABASE IF NOT EXISTS `teste-api`;
USE `teste-api`;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    email VARCHAR(80) NOT NULL
);

INSERT INTO users (name, email) VALUES 
('Alice Silva', 'alice@example.com'),
('Bruno Costa', 'bruno@example.com'),
('Carla Mendes', 'carla@example.com'),
('Diego Rocha', 'diego@example.com'),
('Elisa Souza', 'elisa@example.com');