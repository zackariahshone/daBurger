CREATE DATABASE burgers_db;

USE burgers_db;

/* CREATE TABLE table_name (column_name column_type); */

CREATE TABLE burgers(
    id int auto_increment not null,
    burger_name varchar(30) not null,
    devoured boolean NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);

