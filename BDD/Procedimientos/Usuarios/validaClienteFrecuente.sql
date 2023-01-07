USE HospitalGatifu;

DELIMITER //

DROP PROCEDURE IF EXISTS HospitalGatifu.clienteFrecuente //

CREATE PROCEDURE `clienteFrecuente` (
	IN idCliente INT
)
BEGIN
	DECLARE CantidadCitas INT DEFAULT 0;
    DECLARE Frecuente TINYINT DEFAULT 0;
    
	SELECT u.Frecuente 
    INTO Frecuente
    FROM HospitalGatifu.Usuario u
	WHERE u.idUsuario = idCliente
    ;
    
    IF Frecuente = 1 THEN 
		SELECT Frecuente;
    END IF;
    
    SELECT COUNT(*) 
    INTO CantidadCitas
    FROM HospitalGatifu.Cita c
	JOIN HospitalGatifu.Mascota m ON m.idMascota = c.Mascota_idMascota
    JOIN HospitalGatifu.Usuario u ON u.idUsuario = m.Usuario_idUsuario
    WHERE u.idUsuario = idCliente
    GROUP BY u.idUsuario
    ;
    
	IF CantidadCitas >= 3 THEN
		UPDATE HospitalGatifu.Usuario u
		SET u.Frecuente = 1
        WHERE u.idUsuario = idCliente;
        
        SELECT 1 as Frecuente;
	ELSE 
		SELECT 0 as Frecuente;
    END IF;
    
END;

CALL HospitalGatifu.clienteFrecuente(1);
