USE HospitalGatifu;

DELIMITER //

DROP PROCEDURE IF EXISTS HospitalGatifu.obtenerPacientes //

CREATE PROCEDURE `obtenerPacientes` (
	IN idMedico INT
)
BEGIN
	DECLARE tipoUsuario INT;
	-- Validar que sea medico
    SELECT tu.Nombre
    INTO tipoUsuario 
    FROM HospitalGatifu.Usuario u 
	JOIN HospitalGatifu.TipoUsuario tu ON tu.idTipoUsuario = u.TipoUsuario_idTipoUsuario
    WHERE u.idUsuario = idMedico;
    
    IF tipoUsuario <> 'Medico' THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El usuario no es un médico';
    END IF;
    
    -- Obtener todas las citas de un medico
    SELECT 
		DISTINCT(m.idMascota), 
		m.foto, 
        m.edad, 
        dm.raza, 
        dm.TipoAnimal, 
        u.idUsuario idOwner,
        CONCAT_WS(" ", u.nombres, u.apellidos) ownerUser
	FROM HospitalGatifu.Cita c 
    JOIN HospitalGatifu.Mascota m ON m.idMascota = c.Mascota_idMascota
    JOIN HospitalGatifu.Usuario u ON u.idUsuario = m.Usuario_idUsuario
    JOIN HospitalGatifu.DescripcionMascota dm ON dm.idDescripcionMascota = m.DescripcionMascota_idDescripcionMascota
    WHERE c.MedicoAsignado = 16;    
    
END;

CALL `HospitalGatifu`.`obtenerPacientes`(16);
