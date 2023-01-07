USE HospitalGatifu;

DELIMITER //

DROP PROCEDURE IF EXISTS HospitalGatifu.modificarTarifa //

CREATE PROCEDURE `modificarTarifa` (
	IN idTarifa INT,
	IN nuevoPrecio DECIMAL(10,0)
)
BEGIN
	UPDATE HospitalGatifu.Tarifa t
    SET
		t.Precio = nuevoPrecio
	WHERE 
		t.idTarifa = idTarifa;
END;

CALL `HospitalGatifu`.`modificarTarifa`(1, 100);
