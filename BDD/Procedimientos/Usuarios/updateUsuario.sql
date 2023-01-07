DELIMITER //

DROP PROCEDURE IF EXISTS HospitalGatifu.updateUsuario //
CREATE PROCEDURE 
  HospitalGatifu.updateUsuario( 
	IN id INT,
    IN tipoUsuario INT,
    IN email VARCHAR(100),
    IN especialidad INT,
    IN frecuente TINYINT,
    IN password VARCHAR(80),
    IN nombres VARCHAR(100),
    IN apellidos VARCHAR(100),
    IN telefono VARCHAR(8)
  )
BEGIN  

	DECLARE activo TINYINT;
    
    SELECT u.activo INTO activo FROM HospitalGatifu.Usuario u WHERE u.idUsuario = id LIMIT 1;
    
    IF activo = 0 THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El usuario no está activo, no se puede modificar';
	END IF;

	UPDATE HospitalGatifu.Usuario u
    SET 
		u.TipoUsuario_idTipoUsuario = TipoUsuario,
        u.Email = email,
        u.Especialidad_idEspecialidad = especialidad,
        u.Frecuente = frecuente,
        u.password = password,
        u.nombres = nombres,
        u.apellidos = apellidos,
        u.telefono = telefono
    WHERE 
		u.idUsuario = id AND
        u.activo = 1;
END 
//
DELIMITER ;

SELECT * FROM Usuario;
CALL HospitalGatifu.updateUsuario(1, 1, 'prueba@prueba.com', null, 0, '123', 'Diego', 'Alvaro', '12312312');


