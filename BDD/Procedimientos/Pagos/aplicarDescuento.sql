USE HospitalGatifu;

DELIMITER //

DROP PROCEDURE IF EXISTS HospitalGatifu.aplicarDescuento //

CREATE PROCEDURE `aplicarDescuento` (
	IN nuevoPrecio FLOAT,
    IN idPago INT
)
BEGIN
	
    IF nuevoPrecio < 0 THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El nuevo precio no puede ser menor a 0';
    END IF;

	UPDATE HospitalGatifu.Pago p
    SET
		p.TotalAPagar = nuevoPrecio
	WHERE 
		p.idPago = idPago; 
END;

CALL `HospitalGatifu`.`aplicarDescuento`(200, 1);