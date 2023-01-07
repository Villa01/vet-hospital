DELIMITER //

DROP PROCEDURE IF EXISTS HospitalGatifu.registrarMascota //
CREATE PROCEDURE 
  HospitalGatifu.registrarMascota( 
	IN raza VARCHAR(45),
    IN tipoAnimal VARCHAR(45),
    IN edad INT,
    IN foto VARCHAR(100),
    IN idUsuario INT
  )
BEGIN  
	DECLARE idDescripcion INT;
    
    SELECT 
		idDescripcionMascota
	INTO idDescripcion
    FROM HospitalGatifu.DescripcionMascota dm
    WHERE 
		dm.TipoAnimal = UPPER(tipoAnimal) AND
        dm.raza = UPPER(raza)
    ;
	
    IF (idDescripcion IS NULL) THEN
		INSERT INTO HospitalGatifu.DescripcionMascota(TipoAnimal, raza)
        VALUES(UPPER(tipoAnimal), UPPER(raza));
        SET idDescripcion = last_insert_id();
    END IF;
    
	INSERT INTO HospitalGatifu.Mascota
    (
		edad,
        foto, 
        Usuario_idUsuario,
        DescripcionMascota_idDescripcionMascota
    ) VALUES
    (
		edad, foto, idUsuario, idDescripcion
    );
END 
//
DELIMITER ;

CALL `HospitalGatifu`.`registrarMascota`('Pastor Aleman', 'Perro', 12, 'foto.png', 3);


