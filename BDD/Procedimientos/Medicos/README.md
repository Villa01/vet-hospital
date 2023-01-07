# Medicos

1. [Obtener Pacientes del Médico](#pacientes_medico)
2. [Crear Medico](#Crear_medico)
3. [Obtener Próximas Citas por Id del Médico](#proximas_citas_id)
4. [Es medico](#es_medico)
5. [Crear estudio](#crear_estudio)
6. [Disponibilidad del Médico](#disponibilidad) 
7. [Descuento Cita](#descuento_cita) 
8. [Obtener Todos los Medicamentos](#todos_medicamentos) 
9. [Asignar Medicamento](#asignar_medicamento) 


## Crear Medico <div id="Crear_medico"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`crearMedico`(<{IN email VARCHAR(100)}>, <{IN pass VARCHAR(80)}>, <{IN nombres VARCHAR(100)}>, <{IN apellidos VARCHAR(100)}>, <{IN telefono VARCHAR(8)}>, <{IN especialidad VARCHAR(45)}>, <{IN horaInicio TIME}>, <{IN horaFin TIME}>);
```

### Parametros 
| Nombre       | Tipo         | Opciones |
| ------------ | ------------ | -------- |
| email        | VARCHAR(100) |
| pass         | VARCHAR(80)  |
| nombres      | VARCHAR(100) |
| apellidos    | VARCHAR(100) |
| telefono     | VARCHAR(8)   |
| especialidad | VARCHAR(45)  |
| horaInicio   | TIME         |
| horaFin      | TIME         |


### Ejemplo de uso
```
CALL `HospitalGatifu`.`crearMedico`('javillatoro1@gmail.com','1232154', 'Juan', 'Mendoza', '1231412313','Medicina Interna', '7:00', '17:00');
```

### Retorno 
Ninguno

## Obtener Pacientes del Médico <div id="pacientes_medico"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`obtenerPacientes`(<{IN idMedico INT}>);
```

### Parametros 
| Nombre   | Tipo |
| -------- | ---- |
| idMedico | INT  |

### Ejemplo de uso
```
CALL `HospitalGatifu`.`obtenerPacientes`(16);
```

### Retorno
| idMascota | foto     | edad | raza   | TipoAnimal | idOwner | ownerUser |
| --------- | -------- | ---- | ------ | ---------- | ------- | --------- |
| 1         | foto.png | 12   | PASTOR | ALEMAN     | PERRO   | 3         | martino | langrena |
| 2         | foto.png | 4    | PASTOR | ALEMAN     | PERRO   | 3         | martino | langrena |


## Obtener Citas Próximas por Id del Médico <div id="proximas_citas_id"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`obtenerCitasProximasPorIdMedico`(<{IN idMedico INT}>);
```

### Parametros 
| Nombre   | Tipo | Opciones |
| -------- | ---- | -------- |
| idMedico | INT  |


### Ejemplo de uso
```
CALL HospitalGatifu.obtenerCitasProximasPorIdMedico(16);
```

### Retorno 
| idCita | usuarioOwner | Horario  | EstadoCita          |
| ------ | ------------ | -------- | ------------------- |
| 10     | martino      | langrena | 2022-09-15 10:30:00 | AGENDADA |
| 16     | martino      | langrena | 2022-09-16 12:30:00 | AGENDADA |
| 9      | martino      | langrena | 2022-09-20 05:00:00 | AGENDADA |

## esMedico <div id="es_medico"></div>
### Descripcion
Permite saber si un usuario es médico o no. 
### Procedimiento
```
CALL `HospitalGatifu`.`esMedico`(<{IN idMedico INT}>, <{INOUT esMedico TINYINT}>);
```

### Parametros 
| Nombre   | Tipo | Aclaración                       |
| -------- | ---- | -------------------------------- |
| idMedico | INT  |                                  |
| esMedico | INT  | Devuelve 1 o 0 si es médico o no |


### Ejemplo de uso
```
-- Usuario medico
CALL `HospitalGatifu`.`esMedico`(16,@esMedico);
SELECT @esMedico;
```

### Retorno 
| @esMedico |
| --------- |
| 1         |

## Crear Estudio <div id="crear_estudio"></div>
### Descripcion
Permite saber si un usuario es médico o no. 
### Procedimiento
```
CALL `HospitalGatifu`.`crearEstudio`(<{IN idMedico INT}>, <{IN idMascota INT}>, <{IN url VARCHAR(100)}>);
```

### Parametros 
| Nombre    | Tipo         |
| --------- | ------------ |
| idMedico  | INT          |
| idMascota | INT          |
| url       | VARCHAR(100) |


### Ejemplo de uso
```
CALL `HospitalGatifu`.`crearEstudio`(16, 1, 'estudio_prueba.pdf');
```

### Retorno 
Ninguo

## Descuento Cita <div id="descuento_cita"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`aplicarDescuento`(<{IN nuevoPrecio FLOAT}>, <{IN idPago INT}>);
```

### Parametros 
| Nombre      | Tipo     |
| ----------- | -------- |
| nuevoPrecio | FLOAT |
| idPago | INT |


### Ejemplo de uso
```
CALL `HospitalGatifu`.`aplicarDescuento`(200, 1);
```

### Retorno 
Ninguno

## Disponibilidad <div id="disponibilidad"></div>
### Descripcion
Permite obtener los horarios disponibles de un médico durante una semana. 
### Procedimiento
```
CALL `HospitalGatifu`.`disponibilidadMedico`(<{IN idMedico INT}>, <{IN fechaInicio DATETIME}>, <{IN fechaFin DATETIME}>);
```

### Parametros 
| Nombre      | Tipo     |
| ----------- | -------- |
| idMedico    | INT      |
| fechaInicio | DATETIME |
| fechaFin    | DATETIME |


### Ejemplo de uso
```
CALL `HospitalGatifu`.`disponibilidadMedico`(21, '2022-09-04', '2022-09-10');
```

### Retorno 
| dia       | inicio   | fin      |
| --------- | -------- | -------- |
| Monday    | 09:00:00 | 10:00:00 |
| Monday    | 10:00:00 | 11:00:00 |
| Monday    | 11:00:00 | 12:00:00 |
| Monday    | 12:00:00 | 13:00:00 |
| Monday    | 13:00:00 | 14:00:00 |
| Monday    | 14:00:00 | 15:00:00 |
| Monday    | 15:00:00 | 16:00:00 |
| Monday    | 16:00:00 | 17:00:00 |
| Monday    | 17:00:00 | 18:00:00 |
| Monday    | 18:00:00 | 19:00:00 |
| Monday    | 19:00:00 | 20:00:00 |
| Tuesday   | 09:00:00 | 10:00:00 |
| Tuesday   | 10:00:00 | 11:00:00 |
| Tuesday   | 11:00:00 | 12:00:00 |
| Tuesday   | 12:00:00 | 13:00:00 |
| Tuesday   | 13:00:00 | 14:00:00 |
| Tuesday   | 14:00:00 | 15:00:00 |
| Tuesday   | 15:00:00 | 16:00:00 |
| Tuesday   | 16:00:00 | 17:00:00 |
| Tuesday   | 17:00:00 | 18:00:00 |
| Tuesday   | 18:00:00 | 19:00:00 |
| Tuesday   | 19:00:00 | 20:00:00 |
| Wednesday | 09:00:00 | 10:00:00 |
| Wednesday | 10:00:00 | 11:00:00 |
| Wednesday | 11:00:00 | 12:00:00 |
| Wednesday | 12:00:00 | 13:00:00 |
| Wednesday | 13:00:00 | 14:00:00 |
| Wednesday | 14:00:00 | 15:00:00 |
| Wednesday | 15:00:00 | 16:00:00 |
| Wednesday | 16:00:00 | 17:00:00 |
| Wednesday | 17:00:00 | 18:00:00 |
| Wednesday | 18:00:00 | 19:00:00 |
| Wednesday | 19:00:00 | 20:00:00 |
| Thursday  | 09:00:00 | 10:00:00 |
| Thursday  | 10:00:00 | 11:00:00 |
| Thursday  | 11:00:00 | 12:00:00 |
| Thursday  | 12:00:00 | 13:00:00 |
| Thursday  | 13:00:00 | 14:00:00 |
| Thursday  | 14:00:00 | 15:00:00 |
| Thursday  | 15:00:00 | 16:00:00 |
| Thursday  | 16:00:00 | 17:00:00 |
| Thursday  | 17:00:00 | 18:00:00 |
| Thursday  | 18:00:00 | 19:00:00 |
| Thursday  | 19:00:00 | 20:00:00 |
| Friday    | 09:00:00 | 10:00:00 |
| Friday    | 10:00:00 | 11:00:00 |
| Friday    | 11:00:00 | 12:00:00 |
| Friday    | 12:00:00 | 13:00:00 |
| Friday    | 13:00:00 | 14:00:00 |
| Friday    | 14:00:00 | 15:00:00 |
| Friday    | 15:00:00 | 16:00:00 |
| Friday    | 16:00:00 | 17:00:00 |
| Friday    | 17:00:00 | 18:00:00 |
| Friday    | 18:00:00 | 19:00:00 |
| Friday    | 19:00:00 | 20:00:00 |


## Obtener Todos los Medicamentos <div id="todos_medicamentos"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`obtenerTodosLosMedicamentos`(<{}>);
```

### Parametros 
Ninguno


### Ejemplo de uso
```
CALL `HospitalGatifu`.`obtenerTodosLosMedicamentos`();
```

### Retorno 
| idMedicamento | Nombre |
|---------------|--------|
| 1 | Antipulgas |
| 2 | Collar Antipulgas |
| 3 | Bionupet Articulaciones |


## Asignar un Medicamento <div id="asignar_medicamento"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`asignarMedicamento`(<{IN idMascota INT}>, <{IN idMedico INT}>, <{IN idMedicamento INT}>);
```

### Parametros 
| Nombre | Tipo |
|--------|------|
| idMascota | INT |
| idMedico | INT |
| idMedicamento | INT |


### Ejemplo de uso
```
CALL `HospitalGatifu`.`asignarMedicamento`(1, 38, 3);
```

### Retorno 
Ninguno