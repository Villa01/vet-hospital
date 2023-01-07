# Usuarios

1.  [Crear Usuario](#Crear_Usuario)
2.  [Obtener Usuario Por Id](#Obtener_Usuario_Por_Id)
3.  [Obtener Usuario Por Correo](#Usuario_correo)
4.  [Obtener Usuarios Activos](#Obtener_Usuarios)
5.  [Eliminar Usuario](#Eliminar_Usuario)
6.  [Editar Usuario](#editar_usuario)
7.  [Validar Cliente Frecuente](#cliente_frecuente)

## Crear Usuario <div id="Crear_Usuario"></div>
### Procedimiento

```
CALL `HospitalGatifu`.`crearUsuario`(<{IN email VARCHAR(100)}>, <{IN pass VARCHAR(80)}>, <{IN nombres VARCHAR(100)}>, <{IN apellidos VARCHAR(100)}>, <{IN telefono VARCHAR(8)}>, <{IN tipo_usuario INT}>);
```

### Parametros 
| Nombre | Tipo | Opciones |
|--------|------|----------|
| email | VARCHAR(100) | 
| pass | VARCHAR(80) | 
| nombres | VARCHAR(100) | 
| apellidos | VARCHAR(100) | 
| telefono | VARCHAR(8) | 
| tipo_usuario | INT | 2. Cliente 4. Secretaria |


### Ejemplo de uso
```
// Crea una secretaria
CALL HospitalGatifu.crearUsuario("secretaria1@gmail.com", "prueba123", "Secretaria1", "Prueba", "12321311", 4);

// Crea un cliente
CALL HospitalGatifu.crearUsuario("cliente1@gmail.com", "prueba123", "Cliente1", "Prueba", "53041486", 2);
```

### Retorno 
Ninguno

## Obtener Usuario Por Id <div id="Obtener_Usuario_Por_Id"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`obtenerUsuarioPorId`(<{id INT}>);
```

### Parametros 
| Nombre | Tipo |
|--------|------|
| id | INT | 

### Ejemplo de uso
```
CALL HospitalGatifu.obtenerUsuarioPorId(1);
```

### Retorno
| idUsuario | TipoUsuario | Email | ClienteFrecuente | password | nombres | apellidos | telefono | Especialidad | 
|-----------|-------------|-------|------------------|----------|---------|----------|----------|--------------|
|1|	Cliente|	javillatoro1@gmail.com|	0|	prueba123|	Erick|	Villatoro|	53041486|	

## Obtener Usuario Por Correo <div id="Usuario_correo"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`obtenerUsuarioPorCorreo`(<{correo varchar(100)}>);
```

### Parametros 
| Nombre | Tipo |
|--------|------|
| correo | varchar(100) | 

### Ejemplo de uso
```
CALL HospitalGatifu.obtenerUsuarioPorCorreo('javillatoro1@gmail.com');
```

### Retorno
| idUsuario | TipoUsuario | Email | ClienteFrecuente | password | nombres | apellidos | telefono | Especialidad | 
|-----------|-------------|-------|------------------|----------|---------|----------|----------|--------------|
|1|	Cliente|	javillatoro1@gmail.com|	0|	prueba123|	Erick|	Villatoro|	53041486|	

## Obtener Usuarios Activos <div id="Obtener_Usuarios"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`obtenerUsuariosActivos`();
```

### Parametros 
| Nombre | Tipo |
|--------|------|
| - | - | 

### Ejemplo de uso
```
CALL `HospitalGatifu`.`obtenerUsuariosActivos`();
```

### Retorno
| idUsuario | TipoUsuario | Email | ClienteFrecuente | password | nombres | apellidos | telefono | Especialidad | 
|-----------|-------------|-------|------------------|----------|---------|----------|----------|--------------|
|1|	Cliente|	javillatoro1@gmail.com|	0|	prueba123|	Erick|	Villatoro|	53041486|	

## Eliminar Usuario <div id="Eliminar_Usuario"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`eliminarUsuario`(<{id INT}>);
```

### Parametros 
| Nombre | Tipo |
|--------|------|
| id | INT | 

### Ejemplo de uso
```
CALL HospitalGatifu.eliminarUsuario(1);
```

### Retorno
Ninguno

## Editar Usuario <div id="editar_usuario"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`updateUsuario`(<{IN id INT}>, <{IN tipoUsuario INT}>, <{IN email VARCHAR(100)}>, <{IN especialidad INT}>, <{IN frecuente TINYINT}>, <{IN password VARCHAR(80)}>, <{IN nombres VARCHAR(100)}>, <{IN apellidos VARCHAR(100)}>, <{IN telefono VARCHAR(8)}>);
```

### Parametros 
| Nombre | Tipo | Opciones |
|--------|------|----------|
| id | INT | 
| tipoUsuario | INT | 1. Administrador 2. Cliente 3. Medico, 4. Secretaria |
| email | VARCHAR(100) | 
| especialidad | INT | 
| frecuente | TINYINT|
| password | VARCHAR(80) | 
| nombres | VARCHAR(100) | 
| apellidos | VARCHAR(100) | 
| telefono | VARCHAR(8) | 

### Ejemplo de uso
```
CALL HospitalGatifu.updateUsuario(1, 1, 'prueba@prueba.com', null, 0, '123', 'Diego', 'Alvaro', '12312312');
```
El usuario debe estar activo, de lo contrario se obtendrá el error: 
```
Error Code: 1644. El usuario no está activo, no se puede modificar	0.078 sec
```

### Retorno
Ninguno

## Validar Cliente Frecuente <div id="cliente_frecuente"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`clienteFrecuente`(<{IN idCliente INT}>);
```

### Parametros 
| Nombre | Tipo |
|--------|------|
| idCliente | INT | 

### Ejemplo de uso
```
CALL HospitalGatifu.clienteFrecuente(1);
```
### Retorno
| Frecuente |
|-----------|
| 0 |