USE HospitalGatifu;

DELIMITER //

DROP PROCEDURE IF EXISTS HospitalGatifu.crearPago //

CREATE PROCEDURE `crearPago` (
	IN id INT,
    IN hora DATETIME,
    IN tipoPago INT,
    IN urlArchivo VARCHAR(100),
    IN motivo VARCHAR(45)
)
BEGIN
	DECLARE idEmergencia, idCita, idArchivo INT;

	-- 0 cita, 1 emergencia
	-- verificar si la cita o emergencia existe
	IF tipoPago = 1 THEN 
		SELECT e.idEmergencia
		INTO idEmergencia
        FROM HospitalGatifu.Emergencia e
		WHERE c.idCita = id
        ;
        
        IF idEmergencia IS NULL THEN
			SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La emergencia no existe';
        END IF;
    ELSEIF tipoPago = 0 THEN
		SELECT c.idCita
		INTO idCita
        FROM HospitalGatifu.Cita c
		WHERE c.idCita = id
        ;
        
        IF idCita IS NULL THEN
			SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La cita no existe';
        END IF;
    ELSE
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El tipo de pago no existe';
    END IF;

	-- Insertar archivo
    INSERT INTO `HospitalGatifu`.`Archivo`
	(`url`) VALUES	(urlArchivo);
	SET idArchivo = last_insert_id();

    -- insertar pago
	INSERT INTO `HospitalGatifu`.`Pago`
	(
		`Hora`,
		`Tarifa_idTarifa`,
		`Cita_idCita`,
		`Emergencia_idEmergencia`,
		`Comprobante`
	)
	VALUES
	(
		hora,
		(
			SELECT t.idTarifa  FROM HospitalGatifu.Tarifa t
			WHERE Motivo LIKE CONCAT('%', motivo)
            LIMIT 1
		),
		idCita,
		idEmergencia,
		idArchivo
	);
END;

CALL `HospitalGatifu`.`crearPago`(9, NOW(), 0, 'Comprobante.png', 'Oftalmologia');