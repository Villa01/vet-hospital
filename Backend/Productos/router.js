const express = require('express');
const router = express.Router();
const product_create = require('./controllers/create-products');
const product_view = require('./controllers/obtain-products');
const product_modification = require('./controllers/modify-products');

const logResponseBody = require('./middleware/logs');

router.use(express.json());
router.use(logResponseBody);

router.post('/registrar-producto', product_create.registrar_producto);
router.get('/obtener-productos', product_view.obtener_producto);
router.post('/modificar-precio-producto', product_modification.modificar_precio);

module.exports = router