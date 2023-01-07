
USE HospitalGatifu;
DELIMITER //

DROP PROCEDURE IF EXISTS obtenerHistorialCitas //

CREATE PROCEDURE 
  obtenerHistorialCitas(
	IN idMascota INT
  )
BEGIN  
	SELECT 
		c.idCita, 
		CONCAT_WS(" ", u.nombres, u.apellidos) as MedicoAsignado, 
		c.Horario,
		ec.Decripcion AS EstadoCita
	FROM HospitalGatifu.Cita c
	JOIN HospitalGatifu.Mascota m ON m.idMascota = c.Mascota_idMascota
	LEFT JOIN HospitalGatifu.Usuario u ON u.idUsuario = c.MedicoAsignado
	JOIN HospitalGatifu.EstadoCita ec ON ec.idEstadoCita = c.EstadoCita_idEstadoCita
	WHERE 
		c.Horario < NOW() AND
		c.Mascota_idMascota = idMascota
	;
END 
//

DELIMITER ;

CALL HospitalGatifu.obtenerHistorialCitas(1);



