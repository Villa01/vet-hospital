# Citas

1. [Crear cita](#crear_cita)
1. [Obtener Citas Próximas](#citas_proximas)
1. [Obtener Historial de Citas](#historial_citas)
2. [Cambiar Estado Cita](#estado_cita)
3. [Obtener Todas las Citas Vigentes por id Mascota](#todas_citas_vigentes)
3. [Obtener Todas las Citas Pagadas](#citas_pagadas)

## Crear Citas <div id="crear_citas"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`crearCita`(<{IN horario DATETIME}>, <{IN idMascota INT}>, <{IN motivo VARCHAR(45)}>, <{IN id}>);
```

### Parametros 
| Nombre | Tipo |
|--------|------|
| horario | DATETIME | 
| idMascota | INT | 
| motivo | VARCHAR(45) |
| idDoctor | INT | 

### Ejemplo de uso
```
CALL `HospitalGatifu`.`crearCita`('2022-09-20 05:00:00', 1, 'Dolor de estomago', 38);
```

### Retorno 
Ninguno

## Obtener Citas Próximas <div id="citas_proximas"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`obtenerCitasProximasPorIdMascota`(<{IN idMascota INT}>);
```

### Parametros 
| Nombre | Tipo |
|--------|------|
| idMascota | INT | 

### Ejemplo de uso
```
CALL HospitalGatifu.obtenerCitasProximasPorIdMascota(1);
```

### Retorno 
|idCita | Medico Asignado | Horario | Estado Cita |
|-------|-----------------|---------|-------------|
| 8 | | 2022-09-20 05:00:00 |	AGENDADA |
| 9 | Juan Mendoza | 2022-09-20 05:00:00 | AGENDADA |


## Obtener Historial Citas <div id="historial_citas"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`obtenerHistorialCitas`(<{IN idMascota INT}>);
```

### Parametros 
| Nombre | Tipo |
|--------|------|
| idMascota | INT | 

### Ejemplo de uso
```
CALL HospitalGatifu.obtenerHistorialCitas(1);
```

### Retorno 
|idCita | Medico Asignado | Horario | Estado Cita |
|-------|-----------------|---------|-------------|
| 8 | Erick Villatoro | 2022-09-07 05:32:36 |	AGENDADA |
| 9 |  | 2022-09-07 05:34:52 | AGENDADA |

## Cambiar Estado Cita <div id="estado_cita"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`cambiarEstado`(<{IN idCita INT}>, <{IN nuevoEstado VARCHAR(45)}>);
```

### Parametros 
| Nombre | Tipo | Opciones |
|--------|------|----------|
| idCita | INT | |
| nuevoEstado | VARCHAR(45) | AGENDADA, PAGADA, ASIGNADA | 

### Ejemplo de uso
```
CALL `HospitalGatifu`.`cambiarEstado`(9, 'pagada');
```

### Retorno 
Ninguno

## Obtener Todas las Citas Vigentes <div id="todas_citas_vigentes"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`obtenerTodasLasCitas`(<{IN idMascota INT}>);
```

### Parametros 
| Nombre | Tipo |
|--------|------|
| idMascota | INT | 

### Ejemplo de uso
```
CALL HospitalGatifu.obtenerTodasLasCitas(1);
```

### Retorno 
| idCita | MedicoAsignado | Horario | EstadoCita | idPago | horaPago | EstadoPago| MotivoPago | Precio | idMacota | foto | MotivosCita |
|--------|----------------|---------|------------|--------|----------|-----------|------------|--------|----------|------|-------------|
| 9 | Juan Mendoza | 2022-09-20 05:00:00 |	PAGADA | 1 | 2022-09-12 00:55:05 | CREADO |	Medicina General | 100 | 1 | foto.png |	Dolor de estomago, Dolor de estomago |


## Obtener Todas las Citas Pagadas <div id="citas_pagadas"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`obtenerCitasPagadas`(<{}>);
```

### Parametros 
Ninguno

### Ejemplo de uso
```
CALL `HospitalGatifu`.`obtenerCitasPagadas`();
```

### Retorno 
| idCita | MedicoAsignado | Horario | idEstadoCita | EstadoCita | idPago | horaPago | EstadoPago| MotivoPago | Precio | idMacota | foto | MotivosCita |
|--------|----------------|---------|--------------|------------|--------|----------|-----------|------------|--------|----------|------|-------------|
| 9 | Juan Mendoza | 2022-09-20 05:00:00 | 2 | PAGADA | 1 |	2022-09-12 00:55:05	| CREADO |	Medicina | General	| 100 | 1 | https://gatifu.s3.amazonaws.com/pets/pngwing.com.png | Dolor de estomago, Dolor de estomago |