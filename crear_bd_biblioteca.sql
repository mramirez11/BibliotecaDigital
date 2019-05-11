-- MySQL Workbench Synchronization
-- Generated: 2019-04-24 15:24
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Misael

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `biblioteca` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `biblioteca`.`Libro` (
  `idLibro` INT(11) auto_increment NOT NULL,
  `titulo` VARCHAR(45) NULL DEFAULT NULL,
  `rutaPagina` VARCHAR(45) NULL DEFAULT NULL,
  `rutaAudio` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idLibro`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = '	';

CREATE TABLE IF NOT EXISTS `biblioteca`.`Categoria` (
  `idCategoria`  INT(11) auto_increment NOT NULL,
  `titulo` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idCategoria`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `biblioteca`.`Libro_has_Categoria` (
  `Libro_idLibro` INT(11) NOT NULL,
  `Categoria_idCategoria` INT(11) NOT NULL,
  PRIMARY KEY (`Libro_idLibro`, `Categoria_idCategoria`),
  INDEX `fk_Libro_has_Categoria_Categoria1_idx` (`Categoria_idCategoria` ASC),
  INDEX `fk_Libro_has_Categoria_Libro_idx` (`Libro_idLibro` ASC),
  CONSTRAINT `fk_Libro_has_Categoria_Libro`
    FOREIGN KEY (`Libro_idLibro`)
    REFERENCES `biblioteca`.`Libro` (`idLibro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Libro_has_Categoria_Categoria1`
    FOREIGN KEY (`Categoria_idCategoria`)
    REFERENCES `biblioteca`.`Categoria` (`idCategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `biblioteca`.`Audio_Guia` (
  `idAudio_Guia` INT(11) auto_increment NOT NULL,
  `titulo` VARCHAR(45) NULL DEFAULT NULL,
  `ruta` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idAudio_Guia`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
