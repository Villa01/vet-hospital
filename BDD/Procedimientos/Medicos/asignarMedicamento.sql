USE HospitalGatifu;

DELIMITER //

DROP PROCEDURE IF EXISTS HospitalGatifu.asignarMedicamento //

CREATE PROCEDURE `asignarMedicamento` (
	IN idMascota INT,
    IN idMedico INT,
    IN idMedicamento INT
)
BEGIN
	DECLARE esMedico TINYINT;
    
    CALL `HospitalGatifu`.`esMedico`(idMedico, esMedico);
    
    IF esMedico <> 1 THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El usuario no es un médico';
    END IF;
    
    INSERT INTO HospitalGatifu.Receta(Mascota_idMascota, Medicamento_idMedicamento, MedicoEmisor) VALUES(idMascota, idMedicamento, idMedico);
END;

CALL `HospitalGatifu`.`asignarMedicamento`(1, 38, 3);
