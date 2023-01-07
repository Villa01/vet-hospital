CREATE DEFINER=`erick`@`%` PROCEDURE `esMedico`(
	IN idMedico INT,
    INOUT esMedico TINYINT
)
BEGIN
	
	DECLARE tipoUsuario VARCHAR(45);
    
	SELECT tu.Nombre
    INTO tipoUsuario 
    FROM HospitalGatifu.Usuario u 
	JOIN HospitalGatifu.TipoUsuario tu ON tu.idTipoUsuario = u.TipoUsuario_idTipoUsuario
    WHERE u.idUsuario = idMedico;
    
    IF tipoUsuario = 'Medico' THEN
		SET esMedico = 1;
    ELSE 
		SET esMedico = 0;
    END IF;
END