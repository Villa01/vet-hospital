USE HospitalGatifu;

DELIMITER //

DROP PROCEDURE IF EXISTS HospitalGatifu.crearMedico //

CREATE PROCEDURE `crearMedico` (
    IN email VARCHAR(100),
    IN pass VARCHAR(80),
    IN nombres VARCHAR(100),
    IN apellidos VARCHAR(100),
    IN telefono VARCHAR(8),
    IN especialidad VARCHAR(45),
    IN horaInicio TIME,
    IN horaFin TIME
)
BEGIN

	DECLARE idEspecialidad INT;
    DECLARE idMedico INT;
    DECLARE n INT DEFAULT 0;
	DECLARE i INT DEFAULT 0;
    
    SELECT 
		e.idEspecialidad
	INTO idEspecialidad
	FROM HospitalGatifu.Especialidad e
	WHERE 
		e.nombre = UPPER(especialidad)
	LIMIT 1
	;
        
    -- Insertar si no existe la especialidad
    IF (idEspecialidad IS NULL) THEN
		INSERT INTO `HospitalGatifu`.`Especialidad`(`nombre`) VALUES(UPPER('traumatologia'));
        SET idEspecialidad = last_insert_id();
    END IF;
    
    
	-- Insertar usuario
	INSERT INTO `HospitalGatifu`.`Usuario`
    ( `TipoUsuario_idTipoUsuario`, `Email`, `Frecuente`, `password`, `nombres`, `apellidos`, `telefono`, `activo`, `Especialidad_idEspecialidad`) 
    VALUES ( 3, email, 0, pass, nombres, apellidos, telefono, 1, idEspecialidad);
    
    SET idMedico = last_insert_id();
    
    DROP TABLE IF EXISTS TempHorario;
    -- Generar el horario del medico
    CREATE TEMPORARY TABLE TempHorario (idHorario INT, dia VARCHAR(45), inicio TIME, fin TIME);
    INSERT INTO TempHorario 
    SELECT *
    FROM HospitalGatifu.Horario h
	WHERE 
		h.dia IN ('lunes', 'martes','miercoles', 'jueves','viernes') AND
		h.inicio between horaInicio AND horaFin
    ;
	
	SELECT COUNT(*) FROM TempHorario INTO n;
	SET i=0;
	WHILE i<n DO 
	  INSERT INTO 
		`HospitalGatifu`.`HorarioMedico`(`Usuario_idUsuario`,`Horario_idHorario`) 
		SELECT idMedico, t.idHorario FROM TempHorario t LIMIT i,1;
	  SET i = i + 1;
	END WHILE;
    DROP TABLE TempHorario;
END;

CALL `HospitalGatifu`.`crearMedico`('javillatoro1@gmail.com','1232154', 'Juan', 'Mendoza', '1231412313','Medicina Interna', '7:00', '17:00');


