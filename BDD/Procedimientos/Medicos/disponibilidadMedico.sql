USE HospitalGatifu;

DELIMITER //

DROP PROCEDURE IF EXISTS HospitalGatifu.disponibilidadMedico //

CREATE PROCEDURE `disponibilidadMedico` (
	IN idMedico INT,
    IN fechaInicio DATETIME,
    IN fechaFin DATETIME
)
BEGIN
	DECLARE esMedico TINYINT DEFAULT 0;
    
	-- Validar que sea medico
    CALL HospitalGatifu.esMedico(idMedico, esMedico);
    
    IF esMedico <> 1 THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El usuario no es un médico';
    END IF;
    
	SELECT 
		hm.dia, hm.inicio, hm.fin
	FROM
	(
		-- Obtener todas las citas proximas del medico
		SELECT 
			TIME(c.Horario) Horario,
			DAYNAME(c.Horario) Dia
		FROM
			HospitalGatifu.Cita c
		JOIN HospitalGatifu.Mascota m ON m.idMascota = c.Mascota_idMascota
		LEFT JOIN HospitalGatifu.Usuario u ON u.idUsuario = m.Usuario_idUsuario
		JOIN HospitalGatifu.EstadoCita ec ON ec.idEstadoCita = c.EstadoCita_idEstadoCita
		WHERE
			c.Horario > fechaInicio
				AND c.Horario <= fechaFin
				AND c.MedicoAsignado = idMedico
		ORDER BY c.Horario
	) AS pct
	RIGHT JOIN
	(
		-- Obtener horario del medico
		SELECT 
			u.idUsuario, h.dia, h.inicio, h.fin
		FROM
			HospitalGatifu.Horario h
		JOIN HospitalGatifu.HorarioMedico hm ON hm.Horario_idHorario = h.idHorario
		JOIN HospitalGatifu.Usuario u ON u.idUsuario = hm.Usuario_idUsuario
		WHERE u.idUsuario = idMedico
	) AS hm
	ON 
		-- Obtener horas dentro del horario y fuera de las citas proximas
		hm.inicio = pct.Horario
		AND hm.dia = pct.Dia
	WHERE pct.Horario IS NULL
	;
    
END;

CALL `HospitalGatifu`.`disponibilidadMedico`(21, '2022-09-04', '2022-09-10');
