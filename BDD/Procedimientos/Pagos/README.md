# Pagos

1. [Creación de pagos](#crear_pago)
2. [Obtener Tarifario](#obtener_tarifario)
3. [Modificar Tarifa](#modificar_tarifa)
4. [Obtener Informacion de Pago por Id](#pago_id)
5. [Modificar Estado de un Pago](#modificar_estado_pago)


## Creación de pagos <div id="crear_pago"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`crearPago`(<{IN id INT}>, <{IN hora DATETIME}>, <{IN tipoPago INT}>, <{IN urlArchivo VARCHAR(100)}>, <{IN motivo VARCHAR(45)}>);
```

### Parametros 
| Nombre       | Tipo         | Descripción |
| ------------ | ------------ | -------- |
| id        | INT | Id de la cita o emergencia |
| hora         | DATETIME  | Hora del pago | 
| tipoPago      | INT | 1. Pago de emergencia 0. Pago de cita |
| urlArchivo    | VARCHAR(100) | |
| motivo     | VARCHAR(45) | Tipo de tarifa a cobrar |


### Ejemplo de uso
```
CALL `HospitalGatifu`.`crearPago`(9, NOW(), 0, 'Comprobante.png', 'Oftalmologia');
```

### Retorno 
Ninguno

## Obtener Tarifario <div id="obtener_tarifario"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`obtenerTarifario`(<{}>);
```

### Parametros 
Ninguno


### Ejemplo de uso
```
CALL `HospitalGatifu`.`obtenerTarifario`();
```

### Retorno 
| idTarifa | motivo |  Precio |
|----------|--------|---------|
| 1 | Medicina  General | 100 | 
| 2 | Traumatologia | 200 |
| 3 | Oftalmología | 200 |
| 4 | Ginecología | 300 |
| 5 | Análisis de Laboratorio | 500 |


## Modificar Tarifa <div id="modificar_tarifa"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`modificarTarifa`(<{IN idTarifa INT}>, <{IN nuevoPrecio DECIMAL(10,0)}>);
```

### Parametros 
| Nombre       | Tipo         |
| ------------ | ------------ |
| idTarifa| INT |
| nuevoPrecio| DATETIME  |


### Ejemplo de uso
```
CALL `HospitalGatifu`.`modificarTarifa`(1, 100);
```

### Retorno 
Ninguno

## Obtener Informacion del un Pago por Id <div id="pago_id"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`obtenerInfoPagoPorId`(<{IN idPago INT}>);
```

### Parametros 
| Nombre       | Tipo         |
| ------------ | ------------ |
| idPago | INT |


### Ejemplo de uso
```
CALL `HospitalGatifu`.`obtenerInfoPagoPorId`(1);
```

### Retorno 
| idPago | Hora | TotalAPagar | EstadoPago | idCita | idEmergencia |
|--------|------|-------------|------------|--------|--------------|
| 1 | 2022-09-12 00:55:05 | 200 | CREADO | 9 |


## Modificar Estado de un Pago <div id="modificar_estado_pago"></div>
### Procedimiento
```
CALL `HospitalGatifu`.`modificarEstadoPago`(<{IN idPago INT}>, <{IN nuevoEstado VARCHAR(50)}>);
```

### Parametros 
| Nombre | Tipo |
| ------------ | ------------ |
| idPago | INT |
| nuevoEstado | VARCHAR(50) |


### Ejemplo de uso
```
CALL `HospitalGatifu`.`modificarEstadoPago`(1, 'CREADO');
```

### Retorno 
Ninguno