DELIMITER //

DROP PROCEDURE IF EXISTS HospitalGatifu.crearCita //
CREATE PROCEDURE 
  HospitalGatifu.crearCita( 
	IN horario DATETIME,
    IN idMascota INT, 
    IN motivo VARCHAR(45),
    IN idDoctor INT
  )
BEGIN  
	DECLARE idMotivoCita INT;
    DECLARE idCita INT;
    DECLARE idTarifa INT;
    DECLARE motivoPago INT;

	IF horario < NOW() THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Solo se pueden agendar citas con horario en el futuro.';
    END IF;
    
    SELECT 
		mc.idMotivoCita
	INTO 
		idMotivoCita
    FROM HospitalGatifu.MotivoCita mc
	WHERE mc.Motivo = motivo
    ;
    
    IF idMotivoCita IS NULL THEN 
		INSERT INTO HospitalGatifu.MotivoCita(Motivo) VALUES(motivo);
        SET idMotivoCita = last_insert_id();
    END IF;
    

	INSERT INTO `HospitalGatifu`.`Cita`
	(
		`Horario`,
		`Mascota_idMascota`,
		`EstadoCita_idEstadoCita`,
        `MedicoAsignado`
    )
	VALUES
	(
		horario,
		idMascota,
		1,
        idDoctor
	);
    SET idCita = last_insert_id();
    
    -- Seleccionar tarifa
    
    SELECT t.idTarifa
    INTO idTarifa
    FROM HospitalGatifu.Tarifa t
	WHERE t.Motivo = (
		SELECT e.nombre 
		FROM HospitalGatifu.Usuario u
		JOIN HospitalGatifu.Especialidad e ON e.idEspecialidad = u.Especialidad_idEspecialidad
		WHERE u.idUsuario = idDoctor
        LIMIT 1
    );
    
    -- Crear pago
    INSERT INTO `HospitalGatifu`.`Pago`
	(
		`Tarifa_idTarifa`,
		`Cita_idCita`,
		`EstadoCita_idEstadoCita`
	) VALUES (idTarifa, idCita, 1); -- EstadoPago 1 = CREADO

    INSERT INTO HospitalGatifu.CitaMotivoCita(Cita_idCita, MotivoCita_idMotivoCita) VALUES(idCita, idMotivoCita);
    
END 
//
DELIMITER ;

CALL `HospitalGatifu`.`crearCita`('2022-09-20 05:00:00', 1, 'Dolor de estomago', 38);

-- SELECT p.idPago, p.Hora, t.Motivo, ec.Decripcion  FROM HospitalGatifu.Pago p
-- JOIN HospitalGatifu.Cita c ON c.idCita = p.Cita_idCita
-- JOIN HospitalGatifu.Tarifa t ON t.idTarifa = p.Tarifa_idTarifa
-- JOIN HospitalGatifu.EstadoCita ec ON ec.idEstadoCita = c.EstadoCita_idEstadoCita
-- WHERE c.idCita = 29
-- ;
