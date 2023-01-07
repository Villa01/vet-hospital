USE HospitalGatifu;

DELIMITER //

DROP PROCEDURE IF EXISTS HospitalGatifu.obtenerInfoPagoPorId //

CREATE PROCEDURE `obtenerInfoPagoPorId` (
	IN idPago INT
)
BEGIN
	SELECT 
		p.idPago, 
        p.Hora, 
        p.TotalAPagar,
        ep.Descripcion EstadoPago,
        p.Cita_idCita idCita,
        p.Emergencia_idEmergencia idEmergencia
    FROM HospitalGatifu.Pago p
    JOIN HospitalGatifu.EstadoPago ep ON ep.idEstadoPago = p.EstadoPago_idEstadoPago
    JOIN HospitalGatifu.Tarifa t ON t.idTarifa = p.Tarifa_idTarifa
    WHERE p.idPago = idPago
    ;
END;

CALL `HospitalGatifu`.`obtenerInfoPagoPorId`(1);