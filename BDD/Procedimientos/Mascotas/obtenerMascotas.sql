
USE HospitalGatifu;
DELIMITER //

DROP PROCEDURE IF EXISTS obtenerMascotas //

CREATE PROCEDURE 
  obtenerMascotas(
	IN idUsuario INT
  )
BEGIN  
	SELECT m.idMascota, m.edad, m.foto, dm.raza, dm.TipoAnimal FROM HospitalGatifu.Mascota m
    JOIN HospitalGatifu.DescripcionMascota dm ON dm.idDescripcionMascota = m.DescripcionMascota_idDescripcionMascota
    WHERE m.Usuario_idUsuario = idUsuario
    ;
END 
//

DELIMITER ;

CALL HospitalGatifu.obtenerMascotas(3);


