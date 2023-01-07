-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema HospitalGatifu
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema HospitalGatifu
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `HospitalGatifu` DEFAULT CHARACTER SET utf8 ;
USE `HospitalGatifu` ;

-- -----------------------------------------------------
-- Table `HospitalGatifu`.`TipoUsuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HospitalGatifu`.`TipoUsuario` (
  `idTipoUsuario` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idTipoUsuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HospitalGatifu`.`Especialidad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HospitalGatifu`.`Especialidad` (
  `idEspecialidad` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idEspecialidad`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HospitalGatifu`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HospitalGatifu`.`Usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `TipoUsuario_idTipoUsuario` INT NOT NULL,
  `Email` VARCHAR(100) NOT NULL,
  `Especialidad_idEspecialidad` INT NULL,
  `Frecuente` TINYINT NULL DEFAULT 0,
  `password` VARCHAR(80) NOT NULL,
  `nombres` VARCHAR(100) NOT NULL,
  `apellidos` VARCHAR(100) NOT NULL,
  `telefono` VARCHAR(8) NULL,
  `activo` TINYINT NULL DEFAULT 1,
  PRIMARY KEY (`idUsuario`),
  INDEX `fk_Usuario_TipoUsuario_idx` (`TipoUsuario_idTipoUsuario` ASC) VISIBLE,
  INDEX `fk_Usuario_Especialidad1_idx` (`Especialidad_idEspecialidad` ASC) VISIBLE,
  CONSTRAINT `fk_Usuario_TipoUsuario`
    FOREIGN KEY (`TipoUsuario_idTipoUsuario`)
    REFERENCES `HospitalGatifu`.`TipoUsuario` (`idTipoUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuario_Especialidad1`
    FOREIGN KEY (`Especialidad_idEspecialidad`)
    REFERENCES `HospitalGatifu`.`Especialidad` (`idEspecialidad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HospitalGatifu`.`DescripcionMascota`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HospitalGatifu`.`DescripcionMascota` (
  `idDescripcionMascota` INT NOT NULL AUTO_INCREMENT,
  `TipoAnimal` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idDescripcionMascota`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HospitalGatifu`.`Mascota`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HospitalGatifu`.`Mascota` (
  `idMascota` INT NOT NULL AUTO_INCREMENT,
  `raza` VARCHAR(45) NOT NULL,
  `edad` INT NOT NULL,
  `foto` VARCHAR(100) NOT NULL,
  `Usuario_idUsuario` INT NOT NULL,
  `DescripcionMascota_idDescripcionMascota` INT NOT NULL,
  PRIMARY KEY (`idMascota`),
  INDEX `fk_Mascota_Usuario1_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  INDEX `fk_Mascota_DescripcionMascota1_idx` (`DescripcionMascota_idDescripcionMascota` ASC) VISIBLE,
  CONSTRAINT `fk_Mascota_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `HospitalGatifu`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Mascota_DescripcionMascota1`
    FOREIGN KEY (`DescripcionMascota_idDescripcionMascota`)
    REFERENCES `HospitalGatifu`.`DescripcionMascota` (`idDescripcionMascota`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HospitalGatifu`.`Medicamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HospitalGatifu`.`Medicamento` (
  `idMedicamento` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idMedicamento`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HospitalGatifu`.`Receta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HospitalGatifu`.`Receta` (
  `Mascota_idMascota` INT NOT NULL,
  `Medicamento_idMedicamento` INT NOT NULL,
  `MedicoEmisor` INT NOT NULL,
  PRIMARY KEY (`Mascota_idMascota`, `Medicamento_idMedicamento`, `MedicoEmisor`),
  INDEX `fk_Mascota_has_Medicamento_Medicamento1_idx` (`Medicamento_idMedicamento` ASC) VISIBLE,
  INDEX `fk_Mascota_has_Medicamento_Mascota1_idx` (`Mascota_idMascota` ASC) VISIBLE,
  INDEX `fk_Receta_Usuario1_idx` (`MedicoEmisor` ASC) VISIBLE,
  CONSTRAINT `fk_Mascota_has_Medicamento_Mascota1`
    FOREIGN KEY (`Mascota_idMascota`)
    REFERENCES `HospitalGatifu`.`Mascota` (`idMascota`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Mascota_has_Medicamento_Medicamento1`
    FOREIGN KEY (`Medicamento_idMedicamento`)
    REFERENCES `HospitalGatifu`.`Medicamento` (`idMedicamento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Receta_Usuario1`
    FOREIGN KEY (`MedicoEmisor`)
    REFERENCES `HospitalGatifu`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HospitalGatifu`.`EstadoCita`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HospitalGatifu`.`EstadoCita` (
  `idEstadoCita` INT NOT NULL AUTO_INCREMENT,
  `Decripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idEstadoCita`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HospitalGatifu`.`Cita`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HospitalGatifu`.`Cita` (
  `idCita` INT NOT NULL AUTO_INCREMENT,
  `MedicoAsignado` INT NOT NULL,
  `Horario` DATETIME NOT NULL,
  `Aprobado` TINYINT NULL DEFAULT 0,
  `Mascota_idMascota` INT NOT NULL,
  `EstadoCita_idEstadoCita` INT NOT NULL,
  PRIMARY KEY (`idCita`),
  INDEX `fk_Cita_Usuario1_idx` (`MedicoAsignado` ASC) VISIBLE,
  INDEX `fk_Cita_Mascota1_idx` (`Mascota_idMascota` ASC) VISIBLE,
  INDEX `fk_Cita_EstadoCita1_idx` (`EstadoCita_idEstadoCita` ASC) VISIBLE,
  CONSTRAINT `fk_Cita_Usuario1`
    FOREIGN KEY (`MedicoAsignado`)
    REFERENCES `HospitalGatifu`.`Usuario` (`TipoUsuario_idTipoUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Cita_Mascota1`
    FOREIGN KEY (`Mascota_idMascota`)
    REFERENCES `HospitalGatifu`.`Mascota` (`idMascota`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Cita_EstadoCita1`
    FOREIGN KEY (`EstadoCita_idEstadoCita`)
    REFERENCES `HospitalGatifu`.`EstadoCita` (`idEstadoCita`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HospitalGatifu`.`Horario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HospitalGatifu`.`Horario` (
  `idHorario` INT NOT NULL AUTO_INCREMENT,
  `dia` VARCHAR(45) NOT NULL,
  `inicio` TIME NOT NULL,
  `fin` TIME NOT NULL,
  PRIMARY KEY (`idHorario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HospitalGatifu`.`Log`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HospitalGatifu`.`Log` (
  `idLog` INT NOT NULL AUTO_INCREMENT,
  `Metodo` VARCHAR(45) NOT NULL,
  `Entrada` JSON NOT NULL,
  `Salida` JSON NOT NULL,
  `EsError` TINYINT NOT NULL,
  `FechaHora` DATETIME NOT NULL,
  PRIMARY KEY (`idLog`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HospitalGatifu`.`Sala`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HospitalGatifu`.`Sala` (
  `idSala` INT NOT NULL AUTO_INCREMENT,
  `numero` INT NOT NULL,
  `nivel` INT NOT NULL,
  `disponible` TINYINT NOT NULL,
  PRIMARY KEY (`idSala`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HospitalGatifu`.`EstadoEmergencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HospitalGatifu`.`EstadoEmergencia` (
  `idEstadoEmergencia` INT NOT NULL AUTO_INCREMENT,
  `Descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idEstadoEmergencia`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HospitalGatifu`.`Emergencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HospitalGatifu`.`Emergencia` (
  `idEmergencia` INT NOT NULL,
  `Ingreso` DATETIME NOT NULL,
  `Sala_idSala` INT NOT NULL,
  `Usuario_idUsuario` INT NOT NULL,
  `Mascota_idMascota` INT NOT NULL,
  `EstadoEmergencia_idEstadoEmergencia` INT NOT NULL,
  PRIMARY KEY (`idEmergencia`),
  INDEX `fk_Emergencia_Sala1_idx` (`Sala_idSala` ASC) VISIBLE,
  INDEX `fk_Emergencia_Usuario1_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  INDEX `fk_Emergencia_Mascota1_idx` (`Mascota_idMascota` ASC) VISIBLE,
  INDEX `fk_Emergencia_EstadoEmergencia1_idx` (`EstadoEmergencia_idEstadoEmergencia` ASC) VISIBLE,
  CONSTRAINT `fk_Emergencia_Sala1`
    FOREIGN KEY (`Sala_idSala`)
    REFERENCES `HospitalGatifu`.`Sala` (`idSala`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Emergencia_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `HospitalGatifu`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Emergencia_Mascota1`
    FOREIGN KEY (`Mascota_idMascota`)
    REFERENCES `HospitalGatifu`.`Mascota` (`idMascota`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Emergencia_EstadoEmergencia1`
    FOREIGN KEY (`EstadoEmergencia_idEstadoEmergencia`)
    REFERENCES `HospitalGatifu`.`EstadoEmergencia` (`idEstadoEmergencia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HospitalGatifu`.`HorarioMedico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HospitalGatifu`.`HorarioMedico` (
  `Usuario_idUsuario` INT NOT NULL,
  `Horario_idHorario` INT NOT NULL,
  PRIMARY KEY (`Usuario_idUsuario`, `Horario_idHorario`),
  INDEX `fk_Usuario_has_Horario_Horario1_idx` (`Horario_idHorario` ASC) VISIBLE,
  INDEX `fk_Usuario_has_Horario_Usuario1_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Usuario_has_Horario_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `HospitalGatifu`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuario_has_Horario_Horario1`
    FOREIGN KEY (`Horario_idHorario`)
    REFERENCES `HospitalGatifu`.`Horario` (`idHorario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HospitalGatifu`.`Tarifa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HospitalGatifu`.`Tarifa` (
  `idTarifa` INT NOT NULL AUTO_INCREMENT,
  `Motivo` VARCHAR(45) NOT NULL,
  `Precio` DECIMAL NOT NULL,
  PRIMARY KEY (`idTarifa`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HospitalGatifu`.`Archivo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HospitalGatifu`.`Archivo` (
  `idArchivo` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idArchivo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HospitalGatifu`.`Pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HospitalGatifu`.`Pago` (
  `idPago` INT NOT NULL AUTO_INCREMENT,
  `Hora` DATETIME NOT NULL,
  `Tarifa_idTarifa` INT NOT NULL,
  `Cita_idCita` INT NULL,
  `Emergencia_idEmergencia` INT NULL,
  `Comprobante` INT NULL,
  PRIMARY KEY (`idPago`),
  INDEX `fk_Pago_Tarifa1_idx` (`Tarifa_idTarifa` ASC) VISIBLE,
  INDEX `fk_Pago_Cita1_idx` (`Cita_idCita` ASC) VISIBLE,
  INDEX `fk_Pago_Emergencia1_idx` (`Emergencia_idEmergencia` ASC) VISIBLE,
  INDEX `fk_Pago_Archivo1_idx` (`Comprobante` ASC) VISIBLE,
  CONSTRAINT `fk_Pago_Tarifa1`
    FOREIGN KEY (`Tarifa_idTarifa`)
    REFERENCES `HospitalGatifu`.`Tarifa` (`idTarifa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Pago_Cita1`
    FOREIGN KEY (`Cita_idCita`)
    REFERENCES `HospitalGatifu`.`Cita` (`idCita`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Pago_Emergencia1`
    FOREIGN KEY (`Emergencia_idEmergencia`)
    REFERENCES `HospitalGatifu`.`Emergencia` (`idEmergencia`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Pago_Archivo1`
    FOREIGN KEY (`Comprobante`)
    REFERENCES `HospitalGatifu`.`Archivo` (`idArchivo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HospitalGatifu`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HospitalGatifu`.`user` (
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP);


-- -----------------------------------------------------
-- Table `HospitalGatifu`.`Estudio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HospitalGatifu`.`Estudio` (
  `idEstudio` INT NOT NULL AUTO_INCREMENT,
  `MedicoAsignado` INT NOT NULL,
  `Mascota_idMascota` INT NOT NULL,
  `Archivo_idArchivo` INT NOT NULL,
  PRIMARY KEY (`MedicoAsignado`, `Mascota_idMascota`, `Archivo_idArchivo`),
  INDEX `fk_Estudio_Mascota1_idx` (`Mascota_idMascota` ASC) VISIBLE,
  INDEX `fk_Estudio_Archivo1_idx` (`Archivo_idArchivo` ASC) VISIBLE,
  CONSTRAINT `fk_Estudio_Usuario1`
    FOREIGN KEY (`MedicoAsignado`)
    REFERENCES `HospitalGatifu`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Estudio_Mascota1`
    FOREIGN KEY (`Mascota_idMascota`)
    REFERENCES `HospitalGatifu`.`Mascota` (`idMascota`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Estudio_Archivo1`
    FOREIGN KEY (`Archivo_idArchivo`)
    REFERENCES `HospitalGatifu`.`Archivo` (`idArchivo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HospitalGatifu`.`MotivoCita`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HospitalGatifu`.`MotivoCita` (
  `idMotivoCita` INT NOT NULL AUTO_INCREMENT,
  `Motivo` VARCHAR(45) NULL,
  PRIMARY KEY (`idMotivoCita`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `HospitalGatifu`.`CitaMotivoCita`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `HospitalGatifu`.`CitaMotivoCita` (
  `Cita_idCita` INT NOT NULL,
  `MotivoCita_idMotivoCita` INT NOT NULL,
  PRIMARY KEY (`Cita_idCita`, `MotivoCita_idMotivoCita`),
  INDEX `fk_Cita_has_MotivoCita_MotivoCita1_idx` (`MotivoCita_idMotivoCita` ASC) VISIBLE,
  INDEX `fk_Cita_has_MotivoCita_Cita1_idx` (`Cita_idCita` ASC) VISIBLE,
  CONSTRAINT `fk_Cita_has_MotivoCita_Cita1`
    FOREIGN KEY (`Cita_idCita`)
    REFERENCES `HospitalGatifu`.`Cita` (`idCita`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Cita_has_MotivoCita_MotivoCita1`
    FOREIGN KEY (`MotivoCita_idMotivoCita`)
    REFERENCES `HospitalGatifu`.`MotivoCita` (`idMotivoCita`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
