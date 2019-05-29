ALTER TABLE `biblioteca`.`Libro` auto_increment = 1; 
INSERT INTO `biblioteca`.`Libro` (`titulo`, `rutaPagina`,`rutaAudio`,`cantPaginas`) VALUES ('Blanca Nieves', 'lib/img/libros/Blanca Nieves/Portada.png','lib/audio/Blanca Nieves/Portada.png' ,11); 
INSERT INTO `biblioteca`.`Libro` (`titulo`, `rutaPagina`,`rutaAudio`,`cantPaginas`) VALUES ('Caperucita Roja', 'lib/img/libros/Caperucita Roja/Portada.png','lib/audio/Caperucita Roja/Portada.png' ,10); 
INSERT INTO `biblioteca`.`Libro` (`titulo`, `rutaPagina`,`rutaAudio`,`cantPaginas`) VALUES ('El arbol magico', 'lib/img/libros/El arbol magico/Portada.png','lib/audio/El arbol magico/Portada.png',11); 
INSERT INTO `biblioteca`.`Libro` (`titulo`, `rutaPagina`,`rutaAudio`,`cantPaginas`) VALUES ('El robot desprogramado', 'lib/img/libros/El robot desprogramado/Portada.png','lib/audio/El robot desprogramado/Portada.png',27); 
INSERT INTO `biblioteca`.`Libro` (`titulo`, `rutaPagina`,`rutaAudio`,`cantPaginas`) VALUES ('Hansel y Gretel', 'lib/img/libros/Hansel y Gretel/Portada.png','lib/audio/Hansel y Gretel/Portada.png',11); 
INSERT INTO `biblioteca`.`Libro` (`titulo`, `rutaPagina`,`rutaAudio`,`cantPaginas`) VALUES ('La cenicienta', 'lib/img/libros/La cenicienta/Portada.png','lib/audio/La cenicienta/Portada.png',21); 
INSERT INTO `biblioteca`.`Libro` (`titulo`, `rutaPagina`,`rutaAudio`,`cantPaginas`) VALUES ('La nube avariciosa', 'lib/img/libros/La nube avariciosa/Portada.png','lib/audio/La nube avariciosa/Portada.png',0); 
INSERT INTO `biblioteca`.`Libro` (`titulo`, `rutaPagina`,`rutaAudio`,`cantPaginas`) VALUES ('Libro de la selva', 'lib/img/libros/Libro de la selva/Portada.png','lib/audio/Libro de la selva/Portada.png',27); 
INSERT INTO `biblioteca`.`Libro` (`titulo`, `rutaPagina`,`rutaAudio`,`cantPaginas`) VALUES ('Los tres cerditos', 'lib/img/libros/Los tres cerditos/Portada.png','lib/audio/Los tres cerditos/Portada.png',7); 
INSERT INTO `biblioteca`.`Libro` (`titulo`, `rutaPagina`,`rutaAudio`,`cantPaginas`) VALUES ('Rey leon', 'lib/img/libros/Rey leon/Portada.png','lib/audio/Rey leon/Portada.png',9); 
INSERT INTO `biblioteca`.`Libro` (`titulo`, `rutaPagina`,`rutaAudio`,`cantPaginas`) VALUES ('El genio chapuzas', 'lib/img/libros/El genio chapuzas/Portada.png','lib/audio/El genio chapuzas/Portada.png',17); 
INSERT INTO `biblioteca`.`Libro` (`titulo`, `rutaPagina`,`rutaAudio`,`cantPaginas`) VALUES ('El pirata bueno', 'lib/img/libros/El pirata bueno/Portada.png','lib/audio/El pirata bueno/Portada.png',13);

INSERT INTO `biblioteca`.`Categoria` (`idCategoria`, `titulo`) VALUES ('1', 'Clasico');
INSERT INTO `biblioteca`.`Categoria` (`idCategoria`, `titulo`) VALUES ('2', 'Ninos');
INSERT INTO `biblioteca`.`Categoria` (`idCategoria`, `titulo`) VALUES ('3', 'Princesa');
INSERT INTO `biblioteca`.`Categoria` (`idCategoria`, `titulo`) VALUES ('4', 'Animales');
INSERT INTO `biblioteca`.`Categoria` (`idCategoria`, `titulo`) VALUES ('5', 'Peliculas');
INSERT INTO `biblioteca`.`Categoria` (`idCategoria`, `titulo`) VALUES ('6', 'Valores morales');

INSERT INTO `biblioteca`.`Libro_has_Categoria` (`Libro_idLibro`, `Categoria_idCategoria`) VALUES ('1', '1');
INSERT INTO `biblioteca`.`Libro_has_Categoria` (`Libro_idLibro`, `Categoria_idCategoria`) VALUES ('1', '3');
INSERT INTO `biblioteca`.`Libro_has_Categoria` (`Libro_idLibro`, `Categoria_idCategoria`) VALUES ('2', '1');
INSERT INTO `biblioteca`.`Libro_has_Categoria` (`Libro_idLibro`, `Categoria_idCategoria`) VALUES ('2', '2');
INSERT INTO `biblioteca`.`Libro_has_Categoria` (`Libro_idLibro`, `Categoria_idCategoria`) VALUES ('3', '6');
INSERT INTO `biblioteca`.`Libro_has_Categoria` (`Libro_idLibro`, `Categoria_idCategoria`) VALUES ('4', '6');
INSERT INTO `biblioteca`.`Libro_has_Categoria` (`Libro_idLibro`, `Categoria_idCategoria`) VALUES ('5', '1');
INSERT INTO `biblioteca`.`Libro_has_Categoria` (`Libro_idLibro`, `Categoria_idCategoria`) VALUES ('5', '2');
INSERT INTO `biblioteca`.`Libro_has_Categoria` (`Libro_idLibro`, `Categoria_idCategoria`) VALUES ('6', '1');
INSERT INTO `biblioteca`.`Libro_has_Categoria` (`Libro_idLibro`, `Categoria_idCategoria`) VALUES ('6', '3');
INSERT INTO `biblioteca`.`Libro_has_Categoria` (`Libro_idLibro`, `Categoria_idCategoria`) VALUES ('7', '6');
INSERT INTO `biblioteca`.`Libro_has_Categoria` (`Libro_idLibro`, `Categoria_idCategoria`) VALUES ('8', '2');
INSERT INTO `biblioteca`.`Libro_has_Categoria` (`Libro_idLibro`, `Categoria_idCategoria`) VALUES ('8', '5');
INSERT INTO `biblioteca`.`Libro_has_Categoria` (`Libro_idLibro`, `Categoria_idCategoria`) VALUES ('8', '4');
INSERT INTO `biblioteca`.`Libro_has_Categoria` (`Libro_idLibro`, `Categoria_idCategoria`) VALUES ('9', '1');
INSERT INTO `biblioteca`.`Libro_has_Categoria` (`Libro_idLibro`, `Categoria_idCategoria`) VALUES ('9', '4');
INSERT INTO `biblioteca`.`Libro_has_Categoria` (`Libro_idLibro`, `Categoria_idCategoria`) VALUES ('10', '5');
INSERT INTO `biblioteca`.`Libro_has_Categoria` (`Libro_idLibro`, `Categoria_idCategoria`) VALUES ('10', '4');
INSERT INTO `biblioteca`.`Libro_has_Categoria` (`Libro_idLibro`, `Categoria_idCategoria`) VALUES ('11', '6');
INSERT INTO `biblioteca`.`Libro_has_Categoria` (`Libro_idLibro`, `Categoria_idCategoria`) VALUES ('12', '6');


SELECT * FROM biblioteca.Libro;