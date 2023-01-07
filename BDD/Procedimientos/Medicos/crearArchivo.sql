USE HospitalGatifu;

DELIMITER //

DROP PROCEDURE IF EXISTS HospitalGatifu.crearEstudio //

CREATE PROCEDURE `crearEstudio` (
	IN idMedico INT,
    IN idMascota INT,
    IN url VARCHAR(100)
)
BEGIN
	DECLARE esMedico TINYINT;
    DECLARE idArchivo INT;
    -- Verificar que el usuario sea medico
    
	CALL `HospitalGatifu`.`esMedico`(idMedico, esMedico);
    
    IF esMedico <> '1' THEN 
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El usuario no es un médico';
    END IF;
    
	-- Crear archivo 
	INSERT INTO `HospitalGatifu`.`Archivo` (`url`) VALUES(url);
    SET idArchivo = last_insert_id();

    -- Crear estudio 
    INSERT INTO `HospitalGatifu`.`Estudio`
		(
			`MedicoAsignado`,
			`Mascota_idMascota`,
			`Archivo_idArchivo`
		) VALUES (
			idMedico,
			idMascota,
			idArchivo
        );

END;

-- CALL `HospitalGatifu`.`crearEstudio`(<{IN idMedico INT}>, <{IN idMascota INT}>, <{IN url VARCHAR(100)}>);
CALL `HospitalGatifu`.`crearEstudio`(16, 1, 'estudio_prueba.pdf');