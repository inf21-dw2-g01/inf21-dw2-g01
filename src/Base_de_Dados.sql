
#------------CRIAÇÃO DO SCHEMA--------------

CREATE schema `filmes`;

USE `filmes`;


#---------------------------------CRIAÇÃO DAS TABELAS---------------------------------

CREATE TABLE `Filmes`(
    `id` bigint NOT NULL,
    `adult` bit NOT NULL,
    `language` nchar(5) NOT NULL,
    `original_title` nvarchar(50) NOT NULL,
    `release_date` date NOT NULL,
    `runtime` int NOT NULL,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB;

CREATE TABLE `genero`(
    `id` bigint NOT NULL,
    `genero` nvarchar(50) NOT NULL,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB; 

CREATE TABLE `genero_filme`(
	`id` int NOT NULL,
    `id_filme` int NOT NULL,
    `id_genero` int NOT NULL
)ENGINE=InnoDB;

CREATE TABLE `user`(
    `id` bigint NOT NULL,
    `first_name` nvarchar(20) NOT NULL,
    `last_name` nvarchar(20) NOT NULL,
    `mail` nvarchar(50) NOT NULL, 
    `favoritos` int,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB;



CREATE TABLE `lista_filme`(
	`id` int NOT NULL,
    `id_lista` int NOT NULL,
    `id_filme` int NOT NULL
)ENGINE=InnoDB;


#-------------------INSERIR DADOS------------------------------






INSERT `lista_filme` (`id`, `id_lista`, `id_filme`) VALUES 
(1, 1, 4),
(2, 1, 5),
(3, 1, 10),
(4, 1, 30),
(5, 2, 4),
(6, 2, 25),
(7, 2, 17),
(8, 2, 6),
(9, 3, 8),
(10, 3, 15),
(11, 3, 10),
(12, 3, 28);



INSERT into `user` (`id`,`first_name`, `last_name`,`mail`, `favoritos`) VALUES 
(1, 'Mariana', 'Pereira', 'a038553@ismai.com', 1),
(2, 'Mário', 'Rodrigues', 'a039139@ismai.com', 2),
(3, 'Ana', 'Azevedo', 'a039600@ismai.com', 3);


INSERT INTO `filmes` (`id`, `adult`, `language`, `original_title`, `release_date`, `runtime`) VALUES 
(1, 0, 'en', 'Spider-Man: No Way Home', CAST('2021-12-15' AS Date), 148),
(2, 0, 'en', 'Don''t Look Up', CAST('2021-12-07' AS Date), 138),
(3, 0, 'en', '0The Matrix Resurrections', CAST('021-12-16' AS Date), 148),
(4, 0, 'en','Encanto', CAST('2021-11-24' AS Date), 102),
(5, 1, 'en', 'Resident Evil: Welcome to Raccoon City', CAST('2021-11-24' AS Date), 107),
(6, 0, 'en' , 'Venom: Let There Be Carnage', CAST('2021-09-30' AS Date), 97),
(7, 1, 'en','Last Looks', CAST('2021-12-02' AS Date), 111),
(8, 1, 'en','No Time to Die', CAST('2021-09-29' AS Date), 163),
(9, 0, 'en', 'Dune', CAST('2021-09-15' AS Date), 155),
(10, 0, 'en','Spider-Man: Far From Home', CAST('2019-06-28' AS Date), 129),
(11, 0, 'en', 'Ghostbusters: Afterlife', CAST('2021-11-11' AS Date), 124),
(12, 0, 'pt', 'Lulli', CAST('2021-12-26' AS Date), 90),
(13, 0, 'en', 'The King´s Man', CAST('2021-12-21' AS Date), 131),
(14, 0, 'en', 'Red Notice', CAST('2021-11-04' AS Date), 117),
(15, 0, 'en', 'Shang-Chi and the Legend of the Ten Rings', CAST('2021-09-01' AS Date), 132),
(16, 0, 'en', 'The Amazing Spider-Man', CAST('2012-06-23' AS Date), 136),
(17, 0,'en', 'Spider-Man: Homecoming', CAST('2017-07-05' AS Date), 133),
(18, 0, 'en', 'Clifford the Big Red Dog', CAST('2021-11-10' AS Date), 97),
(19, 0, 'en', 'Encounter', CAST('2021-12-03' AS Date), 108),
(20, 0, 'en', 'The Amazing Spider-Man 2', CAST('2014-04-16' AS Date), 142),
(21, 0, 'en','Sing 2', CAST('2021-12-01' AS Date), 110),
(22, 0, 'en', 'Eternals', CAST('2021-11-03' AS Date), 157),
(23, 0, 'en', 'Spider-Man', CAST('2002-05-01' AS Date), 121),
(24, 0, 'en', 'Ida Red', CAST('2021-11-05' AS Date), 111),
(25, 0, 'en', 'The Last Duel', CAST('2021-10-13' AS Date), 152),
(26, 0, 'en', 'The Greatest Game Ever Played', CAST('2005-09-30' AS Date), 120),
(27, 1, 'en', 'Furnace', CAST('2007-12-11' AS Date), 90),
(28, 0,'en','Twelve O''Clock High', CAST('1949-12-21' AS Date), 132),
(29, 0,'pt', 'Quando as Mulheres Querem Provas', CAST('1975-03-04' AS Date), 110),
(30, 0, 'en', 'The Second Arrival', CAST('1998-11-06' AS Date), 101);

INSERT `genero_filme` (`id`, `id_filme`, `id_genero`) VALUES 
(1, 1, 1),
(2, 1, 2),
(3, 1, 15),
(4, 2, 4),
(5, 2, 7),
(6, 2, 15),
(7, 3, 1),
(8, 3, 15),
(9, 4, 3),
(10, 4, 4),
(11, 4, 8),
(12, 4, 9),
(13, 5, 11),
(14, 5, 1),
(15, 5, 15),
(16, 6, 15),
(17, 6, 1),
(18, 6, 2),
(19, 7, 1),
(20, 7, 5),
(21, 7, 17),
(22, 8, 2),
(23, 8, 1),
(24, 8, 17),
(25, 9, 15),
(26, 9, 2),
(27, 10, 1),
(28, 10, 2),
(29, 10, 15),
(30, 11, 4),
(31, 11, 9),
(32, 11, 2),
(33, 11, 15),
(34, 12, 4),
(35, 12, 14),
(36, 12, 9),
(37, 13, 1),
(38, 13, 2),
(39, 13, 17),
(40,14, 1),
(41,14, 4),
(42, 14, 5),
(43, 14, 17),
(44, 15, 1),
(45, 15, 2),
(46, 15, 9),
(47, 16, 1),
(48, 16, 2),
(49, 16, 9),
(50, 17, 1),
(51, 17, 2),
(52, 17, 15),
(53, 17, 7),
(54, 18, 3),
(55, 18, 4),
(56, 18, 8),
(57, 19, 15),
(58, 19, 17),
(59, 19, 2),
(60, 20, 1),
(61, 20, 2),
(62, 20, 9),
(63, 21, 3),
(64, 21, 4),
(65, 21, 8),
(66, 21, 12),
(67, 22, 1),
(68, 22, 2),
(69, 22, 9),
(70, 22, 15),
(71, 23, 9),
(72, 23, 1),
(73, 24, 5),
(74, 24, 17),
(75, 24, 7),
(76, 24, 1),
(77, 25, 1),
(78, 25, 7),
(79, 25, 10),
(80, 26, 7),
(81, 27, 5),
(82, 27, 11),
(83, 27, 13),
(84, 28, 18),
(85, 28, 1),
(86, 28, 7),
(87, 29, 4),
(88, 29, 14),
(89, 30, 15);

INSERT into `genero` (`genero`, `id`) VALUES 
('Action', 1),
('Adventure', 2),
('Animation', 3),
('Comedy', 4),
('Crime', 5),
('Documentary', 6),
('Drama', 7),
('Family', 8),
('Fantasy', 9),
('History', 10),
('Horror', 11),
('Music', 12),
('Mystery', 13),
('Romance', 14),
('Science Fiction', 15),
('V Movie', 16),
('Thriller', 17),
('War', 18),
('Western', 19);



/*Select Filmes.original_title, user.id, user.first_name, user.last_name, mail, user.favoritos from user
join lista_filme on user.favoritos = lista_filme.id_lista
join filmes on lista_filme.id_filme = filmes.id*/
