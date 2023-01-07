# Procedimientos y Funciones

# Indice
1. [Usuarios](./Procedimientos/Usuarios/README.md)
2. [Medicos](./Procedimientos/Medicos/README.md)
3. [Mascotas](./Procedimientos/Mascotas/README.md)
4. [Citas](./Procedimientos/Citas/README.md)
5. [Pagos](./Procedimientos/Pagos/README.md)
6. [Logs](#logs)
    1. [Insertar Logs](#insertar_logs)



# Logs <div id="logs"></div>

## Insertar Logs <div id="insertar_logs"></div>
### Descripción
Se utiliza para crear logs desde el middleware. 
### Procedimiento
```
CALL `HospitalGatifu`.`insertarLog`(<{IN metodo VARCHAR(45)}>, <{IN entrada JSON}>, <{IN salida JSON}>, <{IN esError TINYINT}>, <{IN fechaHora DATETIME}>);
```

### Parametros 
| Nombre | Tipo |
|--------|------|
| metodo | VARCHAR(45) | 
| entrada | JSON |
| salida | JSON |
| esError | TINYINT | 
| fechaHora | DATETIME | 

### Ejemplo de uso
```
CALL `HospitalGatifu`.`insertarLog`('POST', '{"msg": "Mensaje de entrada"}', '{"msg": "Mensaje de entrada"}', false, '2022-09-10 05:42:59');
```

### Retorno 
Ninguno