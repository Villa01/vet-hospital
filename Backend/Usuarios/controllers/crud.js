const connection = require('../database/db');
const jwt = require('jsonwebtoken');
const crypt = require('../helpers/pass-encryption');

//registrar usuario en general
exports.save = (req, res) => {
    const email = req.body[0].email;
    const pass = req.body[0].pass;
    const nombres = req.body[0].nombres;
    const apellidos = req.body[0].apellidos;
    const telefono = req.body[0].telefono;

    //encryption
    const encrypted = crypt.encrypt(pass);
    //console.log(encrypted);

    connection.query('CALL HospitalGatifu.crearCliente(?,?,?,?,?)', [email, encrypted, nombres, apellidos, telefono], (error, results) => {
        if(error){
            console.log(error);
        }else{
            console.log('usuario registrado exitosamente');
            res.send(req.body);
        }
    });
};

//registrar medicos
exports.save_medico = (req, res) => {
    const { email, pass, nombres, apellidos, telefono, especialidad, horaInicio, HoraFin } = req.body[0];

    //encryption
    const encrypted = crypt.encrypt(pass);
    console.log(req.body[0]);
    //console.log(encrypted);

    connection.query('CALL `HospitalGatifu`.`crearMedico`(?,?,?,?,?,?,?,?)', [email, encrypted, nombres, apellidos, telefono, especialidad, horaInicio, HoraFin], (error, results) => {
        if(error){
            console.log(error);
            res.status(400).json({
                msg: error.message
            })
        }else{
            console.log('medico registrado exitosamente');
            res.send(req.body);
        }
    });
};

//registrar secretarias
exports.save_secretaria = (req, res) => {
    const email = req.body[0].email;
    const pass = req.body[0].pass;
    const nombres = req.body[0].nombres;
    const apellidos = req.body[0].apellidos;
    const telefono = req.body[0].telefono;
    const tipo_usuario = req.body[0].tipo_usuario;
    
    //encryption
    const encrypted = crypt.encrypt(pass);
    //console.log(encrypted);

    connection.query('CALL HospitalGatifu.crearUsuario(?,?,?,?,?,?)', [email, encrypted, nombres, apellidos, telefono, tipo_usuario], (error, results) => {
        if(error){
            console.log(error);
        }else{
            console.log('secretaria registrada exitosamente');
            res.send(req.body);
        }
    });
};

//registrar cliente
exports.save_cliente = (req, res) => {
    const email = req.body[0].email;
    const pass = req.body[0].pass;
    const nombres = req.body[0].nombres;
    const apellidos = req.body[0].apellidos;
    const telefono = req.body[0].telefono;
    const tipo_usuario = req.body[0].tipo_usuario;
    

    //encryption
    const encrypted = crypt.encrypt(pass);
    //console.log(encrypted);

    connection.query('CALL HospitalGatifu.crearUsuario(?,?,?,?,?,?)', [email, encrypted, nombres, apellidos, telefono, tipo_usuario], (error, results) => {
        if(error){
            console.log(error);
        }else{
            console.log('cliente registrado exitosamente');
            res.send(req.body);
        }
    });
};

//editar usuario
exports.update = (req, res) => {
    const id = req.body[0].id;
    const tipoUsuario = req.body[0].tipoUsuario;
    const email = req.body[0].email;
    const especialidad = req.body[0].especialidad;
    const frecuente = req.body[0].frecuente;
    const password = req.body[0].password;
    const nombres = req.body[0].nombres;
    const apellidos = req.body[0].apellidos;
    const telefono = req.body[0].telefono;
    
    connection.query('CALL HospitalGatifu.updateUsuario(?,?,?,?,?,?,?,?,?)', [id, tipoUsuario, email, especialidad, frecuente, password, nombres, apellidos, telefono], (error, results) => {
        if(error){
            console.log(error);
        }else{
            console.log('usuario editado exitosamente');
            res.send(req.body);
        }
    });
};

//inicio de sesion
exports.login = (req, res) => {
    const correo = req.body[0].correo;
    const password = String(req.body[0].password);

    connection.query('CALL HospitalGatifu.obtenerUsuarioPorCorreo(?)', [correo], (error, results) => {
        if(error || results.length == 0){
            return res.json({
                error: 'usuario no encontrado/registrado en el sistema'
            });
        }else{
            //jwt
            const idUsuario = results[0][0].idUsuario
            const token = jwt.sign({idUsuario:idUsuario}, process.env.JWT_SECRET);

            //comparacion de encriptado
            try {

                const pass_comparation = crypt.comparation(password, results[0][0].password);
                //console.log(pass_comparation);
                if(!pass_comparation){
                    return res.json({
                        error: 'contraseña de usuario invalida'
                    });
                }
            } catch (error) {
                console.log(error)
            }

            //desencriptar token
            const decrypt = jwt.verify(token, process.env.JWT_SECRET);
            //const decrypt = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
            //console.log(token);

            info = results[0][0];
            res.json({
                token: token,
                token_decrypted: decrypt,
                info_user: {info}
            });
        }
    });
};