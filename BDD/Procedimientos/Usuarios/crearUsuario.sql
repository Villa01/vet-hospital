USE HospitalGatifu;

DELIMITER //

DROP PROCEDURE IF EXISTS HospitalGatifu.crearUsuario //

CREATE PROCEDURE `crearUsuario` (
    IN email VARCHAR(100),
    IN pass VARCHAR(80),
    IN nombres VARCHAR(100),
    IN apellidos VARCHAR(100),
    IN telefono VARCHAR(8),
    IN tipo_usuario INT
)
BEGIN

	IF tipo_usuario IN (1,3) THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Solo se pueden crear Secretarias y Clientes';
    END IF;

	INSERT INTO `HospitalGatifu`.`Usuario`
    ( `TipoUsuario_idTipoUsuario`, `Email`, `Frecuente`, `password`, `nombres`, `apellidos`, `telefono`, `activo`) 
    VALUES ( tipo_usuario, email, 0, pass, nombres, apellidos, telefono, 1);
END;

CALL HospitalGatifu.crearUsuario("secretaria1@gmail.com", "prueba123", "Secretaria1", "Prueba", "53041486", 2);