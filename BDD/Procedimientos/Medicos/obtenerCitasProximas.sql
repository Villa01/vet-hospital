
USE HospitalGatifu;
DELIMITER //

DROP PROCEDURE IF EXISTS obtenerCitasProximasPorIdMedico //

CREATE PROCEDURE 
  obtenerCitasProximasPorIdMedico(
	IN idMedico INT
  )
BEGIN  
	SELECT 
		c.idCita, 
		CONCAT_WS(" ", u.nombres, u.apellidos) as usuarioOwner, 
		c.Horario,
		ec.Decripcion AS EstadoCita
	FROM HospitalGatifu.Cita c
	JOIN HospitalGatifu.Mascota m ON m.idMascota = c.Mascota_idMascota
	LEFT JOIN HospitalGatifu.Usuario u ON u.idUsuario = m.Usuario_idUsuario
	JOIN HospitalGatifu.EstadoCita ec ON ec.idEstadoCita = c.EstadoCita_idEstadoCita
	WHERE 
		c.Horario > NOW() AND
		c.MedicoAsignado = idMedico
	ORDER BY c.Horario
	;
END 
//

DELIMITER ;

CALL HospitalGatifu.obtenerCitasProximasPorIdMedico(16);