DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;
CREATE TABLE burger (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255) NOT NULL, 
    createdAt TIMESTAMP NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);