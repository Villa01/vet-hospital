"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const ServiceHandler_1 = require("../controllers/ServiceHandler");
const validate_attributes_1 = require("../middlewares/validate-attributes");
const Proxy_1 = require("../models/Proxy");
const router = (0, express_1.Router)();
const proxy = new Proxy_1.Proxy(new ServiceHandler_1.ServiceHandler());
router.delete('/:idServicio', [
    (0, express_validator_1.param)('idServicio', 'El valor debe ser un numero entero').isInt(),
    validate_attributes_1.validateAtributes
], (req, res) => {
    proxy.request(req, res);
});
exports.default = router;
//# sourceMappingURL=servicio.js.map