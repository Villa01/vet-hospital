# Mascotas


1. [Registrar Mascota](#crear_mascota)
2. [Obtener Mascotas por id Usuario](#obtener_mascotas_id)
3. [Obtener Medicamentos por id Mascota](#medicamentos_id)



## Crear Mascota <div id="crear_mascota"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`registrarMascota`(<{IN raza VARCHAR(45)}>, <{IN tipoAnimal VARCHAR(45)}>, <{IN edad INT}>, <{IN foto VARCHAR(100)}>, <{IN idUsuario INT}>);
```

### Parametros 
| Nombre | Tipo |
|--------|------|
| raza | VARCHAR(45) | 
| tipoAnimal | VARCHAR(45) | 
| edad | INT | 
| foto | VARCHAR(100) | 
| idUsuario | INT | 

### Ejemplo de uso
```
CALL `HospitalGatifu`.`registrarMascota`('Pastor Aleman', 'Perro', 12, 'foto.png', 3);
```

### Retorno 
Ninguno

## Obtener Mascotas por idUsuario <div id="obtener_mascotas_id"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`obtenerMascotas`(<{IN idUsuario INT}>);
```

### Parametros 
| Nombre | Tipo |
|--------|------|
| idUsuario | INT | 

### Ejemplo de uso
```
CALL HospitalGatifu.obtenerMascotas(3);
```

### Retorno 
| idMascota | edad | foto | raza | TipoAnimal |
|-----------|------|------|------|------------|
|1	| 12 |	foto.png |	PASTOR ALEMAN |	PERRO |


## Obtener Medicamentos por idMascota<div id="medicamentos_id"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`obtenerRecetasPorId`(<{IN idMascota INT}>);
```

### Parametros 
| Nombre | Tipo |
|--------|------|
| idMascota | INT | 

### Ejemplo de uso
```
CALL HospitalGatifu.obtenerRecetasPorId(1);
```

### Retorno 
| Nombre | Medico Emisor |
|--------|---------------|
| Antipulgas | Similar Garcia |
| Bionupet Articulaciones |	Similar Garcia |
