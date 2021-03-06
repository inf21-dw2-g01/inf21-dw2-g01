CREATE SCHEMA `Filmes`;

USE `Filmes`;

CREATE TABLE `Filmes`(
    `id` bigint NOT NULL,
    `adult` bit NOT NULL,
    `language` nchar(5) NOT NULL,
    `original_title` nvarchar(50) NOT NULL,
    `release_date` date NOT NULL,
    `runtime` int NOT NULL,
    `genre` nvarchar(50) NOT NULL,
    `generoID` int NOT NULL,
    PRIMARY KEY (`id`)
    FOREIGN KEY (generoId) REFERENCES genero(id)
    FOREIGN KEY (listaId) REFERENCES lista_filmes(id_filme)
)ENGINE=InnoDB;


CREATE TABLE `genero`(
    `id` bigint NOT NULL AUTO_INCREMENT,
    `genero` nvarchar(50) NOT NULL,
    `filmesID` int NOT NULL,
    PRIMARY KEY (`id`)
    FOREIGN KEY (filmesId) REFERENCES Filmes(id)
)ENGINE=InnoDB;

CREATE TABLE `genero_filme`(
    `id` bigint NOT NULL,
    `id_filme` int NOT NULL,
    `id_genero` int NOT NULL,
)ENGINE=InnoDB;

CREATE TABLE `user`(
    `id` bigint NOT NULL AUTO_INCREMENT,
    `first_name` nvarchar(20) NOT NULL,
    `last_name` nvarchar(20) NOT NULL,
    `mail` nvarchar(50) NOT NULL, 
    `favoritos` int,
    `listaID` int NOT NULL,
    PRIMARY KEY (`id`)
    FOREIGN KEY (listaId) REFERENCES lista_filme(id_lista)
)ENGINE=InnoDB;


CREATE TABLE `lista_filme`(
    `id` bigint NOT NULL,
    `id_lista` int NOT NULL,
    `id_filme` int NOT NULL,
    `userID` int NOT NULL,
    `filmesID` int NOT NULL,
    FOREIGN KEY (userId) REFERENCES user(id)
    FOREIGN KEY (filmesId) REFERENCES Filmes(id)
)ENGINE=InnoDB;


GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '12345678'