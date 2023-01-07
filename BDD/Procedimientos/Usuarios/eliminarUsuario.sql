DELIMITER //

DROP PROCEDURE IF EXISTS HospitalGatifu.eliminarUsuario //

CREATE PROCEDURE 
  HospitalGatifu.eliminarUsuario( id INT )
BEGIN  
	UPDATE HospitalGatifu.Usuario u
    SET 
		u.activo = 0
    WHERE u.idUsuario = id;
END 
//

DELIMITER ;

CALL HospitalGatifu.eliminarUsuario(1);



