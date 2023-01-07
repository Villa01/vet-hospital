
USE HospitalGatifu;
DELIMITER //

DROP PROCEDURE IF EXISTS obtenerTodasLasCitas //

CREATE PROCEDURE 
  obtenerTodasLasCitas(
	IN idMascota INT
  )
BEGIN  
	SELECT 
		c.idCita, 
		CONCAT_WS(" ", u.nombres, u.apellidos) as MedicoAsignado, 
		c.Horario,
		ec.Decripcion AS EstadoCita,
        p.idPago,
        p.Hora horaPago,
        ep.Descripcion AS EstadoPago,
        t.Motivo AS MotivoPago,
        t.Precio,
        m.idMascota,
        m.foto,
        GROUP_CONCAT(mc.Motivo SEPARATOR ', ') MotivosCita
	FROM HospitalGatifu.Cita c
	JOIN HospitalGatifu.Mascota m ON m.idMascota = c.Mascota_idMascota
    INNER JOIN HospitalGatifu.CitaMotivoCita cmc ON cmc.Cita_idCita = c.idCita
    INNER JOIN HospitalGatifu.MotivoCita mc ON mc.idMotivoCita = cmc.MotivoCita_idMotivoCita
	LEFT JOIN HospitalGatifu.Usuario u ON u.idUsuario = c.MedicoAsignado
	JOIN HospitalGatifu.EstadoCita ec ON ec.idEstadoCita = c.EstadoCita_idEstadoCita
    LEFT JOIN HospitalGatifu.Pago p ON p.Cita_idCita = c.idCita
    LEFT JOIN HospitalGatifu.EstadoPago ep ON ep.idEstadoPago = p.EstadoPago_idEstadoPago
    LEFT JOIN HospitalGatifu.Tarifa t ON t.idTarifa = p.Tarifa_idTarifa
	WHERE 
		c.Horario > NOW() AND
		c.Mascota_idMascota = idMascota
    GROUP BY c.idCita
	;
END 
//

DELIMITER ;

CALL HospitalGatifu.obtenerTodasLasCitas(1);
