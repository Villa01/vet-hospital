USE HospitalGatifu;

DELIMITER //

DROP PROCEDURE IF EXISTS HospitalGatifu.obtenerTarifario //

CREATE PROCEDURE `obtenerTarifario` (
)
BEGIN
	SELECT * FROM HospitalGatifu.Tarifa t;
END;

CALL `HospitalGatifu`.`obtenerTarifario`();