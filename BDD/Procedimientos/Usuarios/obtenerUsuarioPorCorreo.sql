
USE HospitalGatifu;

DELIMITER //

DROP PROCEDURE IF EXISTS obtenerUsuarioPorCorreo //

CREATE PROCEDURE 
  obtenerUsuarioPorCorreo( correo varchar(100) )
BEGIN  
    SELECT 
	u.idUsuario, 
    tu.Nombre as Especialidad, 
    u.Email, 
    u.Frecuente as ClienteFrecuente, 
    u.password,
    u.nombres,
    u.apellidos,
    u.telefono,
    e.nombre as Especialidad
FROM `HospitalGatifu`.`Usuario` u
   JOIN HospitalGatifu.TipoUsuario tu ON tu.idTipoUsuario = u.TipoUsuario_idTipoUsuario
   LEFT JOIN Especialidad e ON e.idEspecialidad = u.Especialidad_idEspecialidad
   WHERE 
	u.Email = correo AND
    u.activo = 1
   ;
END 
//

DELIMITER ;
CALL HospitalGatifu.obtenerUsuarioPorCorreo('javillatoro1@gmail.com');


