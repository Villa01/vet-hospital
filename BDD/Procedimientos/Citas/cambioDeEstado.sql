DELIMITER //

DROP PROCEDURE IF EXISTS HospitalGatifu.cambiarEstado //
CREATE PROCEDURE 
  HospitalGatifu.cambiarEstado( 
	IN idCita INT,
    IN nuevoEstado VARCHAR(45)
  )
BEGIN  
	
	-- AGENDADA -> PAGADA -> ASIGNADA
	UPDATE HospitalGatifu.Cita c
	SET EstadoCita_idEstadoCita = (
		SELECT ec.idEstadoCita FROM HospitalGatifu.EstadoCita ec
        WHERE ec.Decripcion LIKE CONCAT('%',nuevoEstado)
    )
    WHERE c.idCita = idCita;
END 
//
DELIMITER ;

CALL `HospitalGatifu`.`cambiarEstado`(9, 'pagada');