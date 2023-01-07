USE HospitalGatifu;

DELIMITER //

DROP PROCEDURE IF EXISTS obtenerUsuarioPorId //

CREATE PROCEDURE 
  obtenerUsuarioPorId( id INT )
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
    e.nombre as Especialidad,
	tu.idTipoUsuario as TipoUsuario,
    tu.Nombre as TipoUsuarioDesc
FROM `HospitalGatifu`.`Usuario` u
   JOIN HospitalGatifu.TipoUsuario tu ON tu.idTipoUsuario = u.TipoUsuario_idTipoUsuario
   LEFT JOIN Especialidad e ON e.idEspecialidad = u.Especialidad_idEspecialidad
   WHERE 
	u.idUsuario = id AND
    u.activo = 1
   ;
END 
//

DELIMITER ;

CALL HospitalGatifu.obtenerUsuarioPorCorreo('javillatoro1@gmail.com');