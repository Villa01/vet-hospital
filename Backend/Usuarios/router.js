const express = require('express');
const connection = require('./database/db');
const router = express.Router();
const crud = require('./controllers/crud');

const verifying_token = require('./middleware/auth-token');
const logResponseBody = require('./middleware/logs');
const multer = require('multer');

router.use(express.json());
router.use(logResponseBody);

const upload = multer({});

//obtener todos los usuarios registrados
router.post('/usuariosActivos', verifying_token, (req, res) => {
    connection.query('CALL `HospitalGatifu`.`obtenerUsuariosActivos`()', (error, results) => {
        if(error){
            throw error;
        }else{
            res.send(results[0]);
        }
    })
});

router.get('/ObtenerUsuarios', (req, res) => {
    connection.query('CALL `HospitalGatifu`.`obtenerUsuariosActivos`()', (error, results) => {
        if(error){
            throw error;
        }else{
            res.send(results[0]);
        }
    })
});

//registrar nuevo usuario general
router.post('/registrar', crud.save);

//registrar nuevo medico
router.post('/registrar-medico', crud.save_medico);

//registrar nueva secretaria
router.post('/registrar-secretaria', crud.save_secretaria);

//registrar nuevo cliente
router.post('/registrar-cliente', crud.save_cliente);

//editar usuario
router.put('/editar', verifying_token, crud.update);

//eliminar usuario general
router.delete('/eliminar/:id', verifying_token, (req, res)=>{
    const id = req.params.id;
    connection.query('CALL HospitalGatifu.eliminarUsuario(?)', [id], (error, results) => {
        if(error){
            throw error;
        }else{
            res.send("usuario eliminado");
        }
    })
});

//eliminar medico
router.delete('/eliminar-medico/:id', verifying_token, (req, res)=>{
    const id = req.params.id;
    connection.query('CALL HospitalGatifu.eliminarUsuario(?)', [id], (error, results) => {
        if(error){
            throw error;
        }else{
            res.send("medico eliminado");
        }
    })
});

//eliminar cliente
router.delete('/eliminar-cliente/:id', verifying_token, (req, res)=>{
    const id = req.params.id;
    connection.query('CALL HospitalGatifu.eliminarUsuario(?)', [id], (error, results) => {
        if(error){
            throw error;
        }else{
            res.send("cliente eliminado");
        }
    })
});

//eliminar secretaria
router.delete('/eliminar-secretaria/:id', verifying_token, (req, res)=>{
    const id = req.params.id;
    connection.query('CALL HospitalGatifu.eliminarUsuario(?)', [id], (error, results) => {
        if(error){
            throw error;
        }else{
            res.send("usuario eliminado");
        }
    })
});


//obtener usuario por id
router.get('/buscar/:id', verifying_token, (req, res)=>{
    const id = req.params.id;
    connection.query('CALL HospitalGatifu.obtenerUsuarioPorId(?)', [id], (error, results) => {
        if(error){
            throw error;
        }else{
            res.send({users: results[0]});
        }
    })
});

//login de usuario con jwt
router.post('/login', crud.login);

module.exports = router;