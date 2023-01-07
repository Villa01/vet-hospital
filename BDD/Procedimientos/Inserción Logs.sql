USE HospitalGatifu;

DELIMITER //

DROP PROCEDURE IF EXISTS HospitalGatifu.insertarLog //

CREATE PROCEDURE `insertarLog` (
    IN metodo VARCHAR(45),
    IN entrada JSON,
    IN salida JSON,
    IN esError TINYINT,
    IN fechaHora DATETIME
)
BEGIN
	INSERT INTO `HospitalGatifu`.`Log`
	(
		`Metodo`,
		`Entrada`,
		`Salida`,
		`EsError`,
		`FechaHora`
	) VALUES ( metodo, entrada, salida, esError, fechaHora);

END;
CALL `HospitalGatifu`.`insertarLog`('POST', '{"msg": "Mensaje de entrada"}', '{"msg": "Mensaje de entrada"}', false, '2022-09-10 05:42:59');