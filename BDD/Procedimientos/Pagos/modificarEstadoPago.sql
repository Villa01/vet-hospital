USE HospitalGatifu;

DELIMITER //

DROP PROCEDURE IF EXISTS HospitalGatifu.modificarEstadoPago //

CREATE PROCEDURE `modificarEstadoPago` (
	IN idPago INT,
    IN nuevoEstado VARCHAR(50)
)
BEGIN
	UPDATE HospitalGatifu.Pago p
    SET
		p.EstadoPago_idEstadoPago = (
			SELECT ep.idEstadoPago FROM HospitalGatifu.EstadoPago ep
            WHERE ep.Descripcion LIKE CONCAT('%',nuevoEstado)
            LIMIT 1
        )
	WHERE 
		p.idPago = idPago;
END;

CALL `HospitalGatifu`.`modificarEstadoPago`(1, 'CREADO');