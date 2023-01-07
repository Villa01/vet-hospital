
USE HospitalGatifu;
DELIMITER //

DROP PROCEDURE IF EXISTS obtenerRecetasPorId //

CREATE PROCEDURE 
  obtenerRecetasPorId(
	IN idMascota INT
  )
BEGIN  
	SELECT m.Nombre, CONCAT_WS(" ", u.nombres, u.apellidos) MedicoEmisor FROM HospitalGatifu.Receta r
    JOIN Medicamento m ON m.idMedicamento = r.Medicamento_idMedicamento
    JOIN Usuario u ON u.idUsuario = r.MedicoEmisor
    WHERE r.Mascota_idMascota = idMascota
    ;
    
END 
//

DELIMITER ;

CALL HospitalGatifu.obtenerRecetasPorId(1);



