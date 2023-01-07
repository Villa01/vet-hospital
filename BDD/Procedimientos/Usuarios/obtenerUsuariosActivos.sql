DELIMITER //

DROP PROCEDURE IF EXISTS HospitalGatifu.obtenerUsuariosActivos //

CREATE PROCEDURE 
  HospitalGatifu.obtenerUsuariosActivos()
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
   WHERE activo = 1
   LIMIT 50
   ;
END 
//

DELIMITER ;

CALL HospitalGatifu.obtenerUsuariosActivos();




