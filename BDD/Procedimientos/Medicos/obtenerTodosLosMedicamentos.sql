USE HospitalGatifu;

DELIMITER //

DROP PROCEDURE IF EXISTS HospitalGatifu.obtenerTodosLosMedicamentos //

CREATE PROCEDURE `obtenerTodosLosMedicamentos` (
)
BEGIN
    SELECT * FROM HospitalGatifu.Medicamento;
END;

CALL `HospitalGatifu`.`obtenerTodosLosMedicamentos`();
